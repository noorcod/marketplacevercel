import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { addToWishList, removeFromWishList } from "../app/apis/postApis";
import { useWishlistStore } from "../store/wishList";
import { useUserStore } from "../store/User";
import styles from "../styles/WishlistIcon.module.css";
import SignInModal from "./SignInModal";
import { isLikedWishlist, wishlistIcon } from "../../public/icons/index";

import { getUserWishlist } from "../app/apis/getApis";
import { useRouter } from "next/navigation";
import Image from "next/image";
const WishlistIcon = ({ listingId, title,page }: any) => {
  const router = useRouter();
  const [signInModal, setSignInModal] = useState(false);
  const { user, token } = useUserStore((state: any) => state);
  const {
    addToWishlist,
    removeFromWishlist,
    setWishlist,
    wishlistItems,
    count,
  } = useWishlistStore((store: any) => store);
  const [isLiked, setIsLiked] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setIsLiked(wishlistItems?.some((item: any) => item === listingId));
  }, [listingId, wishlistItems, clicked]);
  interface obj {
    fk_listing_id: number;
    fk_user_id?: string;
  }
  const MySwal = withReactContent(Swal);
  const mutationAdd = useMutation({
    mutationFn: (data: any) => addToWishList(data, token),
    onSuccess: (data, variables, context) => {
      // Add In wishlist
      addToWishlist(variables?.fk_listing_id);
      // setIsLiked(true);
      // MySwal.fire({
      //   title: "Added to Wishlist!",
      //   html: `${title} Successfully added to Wishlist`,
      //   icon: "success",
      //   timer: 2000,
      //   showConfirmButton: false,
      // });
    },
  });

  const mutation = useMutation({
    mutationFn: (data: any) => removeFromWishList(data, token),
    onSuccess: (data, variables, context) => {
      removeFromWishlist(variables);
    },
  });
  const object: obj = {
    fk_listing_id: listingId,
    fk_user_id: user?.uuid,
  };
  const handleAddToWishList = (data: obj) => {
    if (user) {
      mutationAdd.mutate(data, token);
    }
  };

  const handleRemoveFromWishList = (data: number) => {
    if (user) {
      mutation.mutate(data, token);
    }
  };
  const handleLikeClick = () => {
    setClicked((prev) => !prev);
    if (isLiked) {
      handleRemoveFromWishList(listingId);
    } else {
      handleAddToWishList(object);
    }
  };

  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        className={`${styles.fav_icon}`}
        onClick={() => (user ? handleLikeClick() : setSignInModal(true))}
      >
        {isLiked ? (
           <img
           src={isLikedWishlist.src}
           width={isLikedWishlist.width}
           height={isLikedWishlist.height}
           className="pt-2 pe-2 m-0"
           
         />
        ) : (
          <Image
          alt="wishlist icon"
            src={wishlistIcon.src}
            width={wishlistIcon.width}
            height={wishlistIcon.height}
            className="pt-2 pe-2 m-0"
            
          />
        )}
      </div>
      <SignInModal
        title="Please create an account."
        show={signInModal}
        onHide={() => {
          setSignInModal(false);
        }}
      />
    </>
  );
};

export default WishlistIcon;
