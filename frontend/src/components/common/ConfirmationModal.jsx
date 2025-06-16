import React from 'react';
import IconBtn from './IconBtn';

export default function ConfirmationModal({ modalData, closeModal }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border theme-border theme-bg-secondary p-6">
        <p className="text-2xl font-semibold theme-text-primary">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 theme-text-secondary">
          {modalData?.text2}
        </p>
        <div className="flex items-center gap-x-4">
          <IconBtn
            onClick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
            customClasses="rounded-md theme-button-primary px-4 py-2 font-semibold hover:scale-95 transition-all duration-200"
          />
          <button
            className="cursor-pointer rounded-md theme-button-secondary px-4 py-2 font-semibold hover:scale-95 transition-all duration-200"
            onClick={closeModal || modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
}
