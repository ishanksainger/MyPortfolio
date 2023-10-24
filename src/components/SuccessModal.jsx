import React from 'react'
import ActiveBtn from './ActiveBtn'

const SuccessModal = ({modalData}) => {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-[#101630] bg-[#101630] p-6">
        <p className="text-2xl font-semibold text-richblack-5 text-white">
                {modalData.text1}
            </p>
            <p className="mt-3 mb-5 leading-6 text-richblack-200">
                {modalData.text2}
            </p>
            <div className="flex items-center gap-x-4">
                <ActiveBtn  className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-white" btnText={modalData?.btn1Text} activeClass="activeClass"
                onClick={modalData?.btn1Handler}/>
                {modalData.btn2Text && <ActiveBtn  className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-white" btnText={modalData?.btn2Text} activeClass="activeClass"
                onClick={modalData?.btn2Handler}/>}
            </div>
        </div>
    </div>
  )
}

export default SuccessModal