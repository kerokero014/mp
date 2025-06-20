'use client';
import Lottie from 'lottie-react';
import successAnim from '../../../../public/Animation - 1745539320690.json';

export default function SuccessLottie() {
  return <Lottie animationData={successAnim} loop={false} style={{ width: 150, height: 150 }} />;
}
