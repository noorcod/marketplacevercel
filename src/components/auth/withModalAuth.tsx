'use client'
import React, { ComponentType, ReactNode, useEffect, useState } from 'react';
import SignInModal from '../SignInModal';
import PhoneNumberModal from '../PhoneNumberModal';
import { useUserStore } from '../../store/User';

const withModalAuth = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  return (props: P):ReactNode => {
    const { user,token } = useUserStore(
      (state: any) => state,
    );
    const [signInModal, setSignInModal] = useState(false);
    const [phoneNumberModal, setphoneNumberModal] = useState(false)
    useEffect(()=>{
      if(token){
        setSignInModal(false)
      }else{
          if("show" in props && props.show === true){
              setSignInModal(true)
          }else{
              setSignInModal(false)
          }
      }
    },[token,props])

    useEffect(()=>{
      if(token && user){
        if("phone_number" in user){
          const { phone_number } = user;
          if(phone_number===null && "show" in props && props.show === true){
            setphoneNumberModal(true)
          }
        }
      }
    },[token,user,props])

    return (<>{
        !token?<SignInModal title=" To Reserve this item, please create an account." show={signInModal} onHide={() => {
          setSignInModal(false)
          if("onHide" in props && typeof props.onHide === "function"){
            props?.onHide(false)
        }
       }} />:phoneNumberModal?<PhoneNumberModal show={phoneNumberModal} onHide={(response:string)=>{
        setphoneNumberModal(false);
        if(response!=="success"){
          if("onHide" in props && typeof props.onHide === "function"){
            props?.onHide(true)
          }
        }
      }}  />:<WrappedComponent {...props} />
    }
    </>);
  }
};

export default withModalAuth;