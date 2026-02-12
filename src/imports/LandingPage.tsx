import svgPaths from "./svg-xoa3aa5535";
import imgUnsplashW5CK5W91U from "figma:asset/d7b57330e754f87f50c5adef5d3aeb9a5e81a551.png";

function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[129.219px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.219 32">
        <g id="logo">
          <path d={svgPaths.p18e45e80} fill="var(--fill-0, #0E7575)" id="Vector" />
          <path d={svgPaths.p1912700} fill="var(--fill-0, #95CB25)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[14px] text-black text-center">Home</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[14px] text-black text-center">About Us</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[14px] text-black text-center">Feature</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[14px] text-black text-center">How it works</p>
    </div>
  );
}

function Navigations() {
  return (
    <div className="content-stretch flex h-[44px] items-center relative shrink-0" data-name="navigations">
      <Frame16 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0e7575] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="button">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[14px] text-center text-white">Get started</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Logo />
      <Navigations />
      <Button />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[12px] relative shrink-0 w-full">
      <Content />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="header">
      <div aria-hidden="true" className="absolute border-[#808080] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[112px] relative size-full">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-black text-center tracking-[-1.04px]">
        <p className="text-[52px] whitespace-pre-wrap">
          <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[56px] not-italic text-[#0e7575] tracking-[-1.04px]">SasRec:</span>
          <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[56px] not-italic tracking-[-1.04px]">{` Safe, Accessible`}</span>
          <span className="leading-[56px]">{` Secure`}</span>
          <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[56px] not-italic tracking-[-1.04px]">{` Records for Every Patient.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[548px]">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black text-center">
        <p className="leading-[28px] whitespace-pre-wrap">Whether you need to access your health record, or track appointments, medications, and checkups so you never miss important dates, you’re in the right place</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#0e7575] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[14px] text-center text-white">Get started</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[800px]">
      <Frame2 />
      <Frame21 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-center left-[112px] top-[64px] w-[1216px]">
      <Frame17 />
      <div className="bg-[#d9d9d9] h-[524px] shrink-0 w-full" />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-white h-[984px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 1">
      <Frame46 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#0e7575] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">Problem Vs Solution</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#fb3748] text-[36px] tracking-[-0.72px]">
        <p className="leading-[44px] whitespace-pre-wrap">The Problem</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Your records are scattered.</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">Different hospitals, labs, and clinics each hold parts of your medical story — making it hard for you to keep everything in one place.</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[116px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative size-full">
        <Frame24 />
        <Frame25 />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative w-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">You keep starting over.</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">New doctor? New test. Because your records don’t follow you, your care doesn’t either.</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative size-full">
        <Frame31 />
        <Frame32 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative size-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">You’re not in control</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">Your health data isn’t really yours — it’s stored everywhere but in your hands.</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative w-full">
        <Frame37 />
        <Frame38 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative w-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[1216px]">
      <Frame27 />
      <Frame29 />
      <Frame35 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame4 />
      <Frame30 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[1216px]">
      <Frame34 />
      <Frame3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex items-center left-[112px] top-[64px] w-[1216px]">
      <Frame22 />
    </div>
  );
}

function Desktop2() {
  return (
    <div className="bg-white h-[610px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 3">
      <Frame33 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1fc16b] text-[36px] tracking-[-0.72px]">
        <p className="leading-[44px] whitespace-pre-wrap">{`The Solution `}</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Everything in one place.</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">SASRec brings all your medical records together — secure, organized, and truly yours.</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[116px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative size-full">
        <Frame44 />
        <Frame45 />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative w-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Access anytime, anywhere.</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">Your verified health data moves with you — no delays, no missing files.</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative size-full">
        <Frame49 />
        <Frame50 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative size-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">You’re in charge now.</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">With SASRec, you decide who sees your records and when. Your health, your control</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative size-full">
        <Frame53 />
        <Frame54 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative size-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[1216px]">
      <Frame42 />
      <Frame47 />
      <Frame51 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame6 />
      <Frame41 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1216px]">
      <Frame5 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex items-center left-[112px] top-[64px] w-[1216px]">
      <Frame40 />
    </div>
  );
}

function Desktop6() {
  return (
    <div className="bg-white h-[610px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 7">
      <Frame39 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#0e7575] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">About us</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[36px] text-black tracking-[-0.72px]">
        <p className="leading-[44px] whitespace-pre-wrap">SASRec Difference</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black">
        <p className="leading-[28px] whitespace-pre-wrap">At SasRec, we believe every patient deserves control over their health journey. Which is why we built a platform where your medical records are safe, always accessible, and updated only by verified healthcare practitioners</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#0e7575] content-stretch flex items-center justify-center px-[20px] py-[14px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Read more</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[592px]">
      <Frame57 />
      <Frame7 />
      <Frame58 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[318px] items-start min-h-px min-w-px relative">
      <div className="h-[318px] relative rounded-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgUnsplashW5CK5W91U} />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-[112px] top-[64px] w-[1216px]">
      <Frame56 />
      <Frame59 />
    </div>
  );
}

function Desktop5() {
  return (
    <div className="bg-white h-[474px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 6">
      <Frame55 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#0e7575] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">What we offer</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[36px] text-black text-center tracking-[-0.72px]">
        <p className="leading-[44px] whitespace-pre-wrap">Made for You, Built Around Your Health</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center w-[710px]">
        <p className="leading-[28px] whitespace-pre-wrap">We are redefining medical record-keeping in Nigeria through security, accessibility, and patient-first innovation. With SasRec, your health journey is not just stored, but protected, verified, and always within reach.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Frame61 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">All-in-One Access</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">From lab results to immunisations, medications, and imaging, everything is organized in one place.</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative w-full">
        <Frame66 />
        <Frame67 />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative w-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame65 />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Patient-First Design</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">Built for patients in Nigeria, making health records safe, simple, and always accessible.</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative w-full">
        <Frame70 />
        <Frame71 />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative w-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame64 />
      <Frame68 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Secure Records</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">Your medical history is safely stored and encrypted, giving you peace of mind and complete privacy.</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[12px] relative w-full">
          <Frame75 />
          <Frame76 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative w-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame74 />
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Verified Updates</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">Only licensed practitioners can update your records, ensuring accuracy and trust.</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative size-full">
        <Frame79 />
        <Frame80 />
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative size-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[28px]">Smart Reminders</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#4d4d4d] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">Set reminders for appointments, medications, and checkups so you never miss important dates.</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative w-full">
        <Frame83 />
        <Frame84 />
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#999] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[16px] pt-[8px] px-[8px] relative w-full">
          <div className="h-[216px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="unsplash:W_5cK5W91_U">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgUnsplashW5CK5W91U} />
          </div>
          <Frame82 />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame73 />
      <Frame77 />
      <Frame81 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame63 />
      <Frame72 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[112px] top-[64px] w-[1216px]">
      <Frame10 />
      <Frame62 />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="bg-white h-[1140px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 2">
      <Frame60 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#0e7575] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">How it works</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[542px]">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] min-h-px min-w-px relative text-[36px] text-black tracking-[-0.72px]">
        <p className="leading-[44px] whitespace-pre-wrap">How SasRec Keeps You in Control</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b7280] text-[16px]">
        <p className="leading-[24px] whitespace-pre-wrap">Access and manage your health records anytime anywhere in one place. Create your profile in minutes.</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-[#0e7575] content-stretch flex items-center justify-center px-[20px] py-[14px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Read more</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame89 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[592px]">
      <Frame87 />
      <Frame88 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[32px]">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0e7575] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[28px] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px]">Download the app</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4d4d4d] text-[16px] w-[432px] whitespace-pre-wrap">Get the SASRec app on your Android or iOS mobile device and sign up instantly.</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[432px]">
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[32px]">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0e7575] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[28px] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px]">Create Your Profile</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4d4d4d] text-[16px] w-[432px] whitespace-pre-wrap">Sign up with your NIN to securely set up your health profile.</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[432px]">
      <Frame99 />
      <Frame100 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[32px]">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0e7575] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[28px] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px]">Request Record Update</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4d4d4d] text-[16px] w-[432px] whitespace-pre-wrap">Share a secure link with your doctor, pharmacist, or lab technician. They verify themselves and upload your records for you.</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[432px]">
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[32px]">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0e7575] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">4</p>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[28px] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.4px]">Access Anytime</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4d4d4d] text-[16px] w-[432px] whitespace-pre-wrap">View your complete health journey in one app — safe, accurate, and always available when you need it.</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[432px]">
      <Frame109 />
      <Frame110 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame91 />
      <Frame96 />
      <Frame101 />
      <Frame106 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start left-[112px] top-[64px] w-[1216px]">
      <Frame86 />
      <Frame90 />
    </div>
  );
}

function Desktop3() {
  return (
    <div className="bg-white h-[616px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 4">
      <Frame85 />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[0] px-[163px] relative text-center w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center not-italic relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
            <p className="leading-[44px] whitespace-pre-wrap">Ready to take control of your health record?</p>
          </div>
          <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#4d4d4d] text-[18px] w-full">
            <p className="leading-[28px] whitespace-pre-wrap">Experience seamless healthcare management with our intuitive mobile app. Designed to allow you have the access to your health records anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MediaStoreBadge() {
  return (
    <div className="h-[45px] relative shrink-0 w-[135px]" data-name="Media / Store Badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 45">
        <g id="Media / Store Badge">
          <rect fill="var(--fill-0, black)" height="43.875" rx="7.3125" width="133.875" x="0.5625" y="0.5625" />
          <rect height="43.875" rx="7.3125" stroke="var(--stroke-0, #A6A6A6)" strokeWidth="1.125" width="133.875" x="0.5625" y="0.5625" />
          <g id="App Store">
            <path d={svgPaths.p1e977d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31105e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe51f100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p21a3e000} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe02df00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p9a90a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p231b7800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2a8e1200} fill="var(--fill-0, white)" />
          </g>
          <g id="Download on the">
            <path d={svgPaths.p1e2bf100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1af1bc80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d7ce000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p378edf80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19314d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22d23a80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19345f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10642080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p239a61f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18683800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p9523a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1aec5800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p26e20500} fill="var(--fill-0, white)" />
          </g>
          <g id="Apple logo">
            <path d={svgPaths.p28b9d2f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2748a680} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MediaStoreBadge1() {
  return (
    <div className="h-[45px] relative shrink-0 w-[151.875px]" data-name="Media / Store Badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151.875 45">
        <g id="Media / Store Badge">
          <rect fill="var(--fill-0, black)" height="43.875" rx="5.0625" width="150.75" x="0.5625" y="0.5625" />
          <rect height="43.875" rx="5.0625" stroke="var(--stroke-0, #A6A6A6)" strokeWidth="1.125" width="150.75" x="0.5625" y="0.5625" />
          <path d={svgPaths.p2f975f80} fill="var(--fill-0, white)" id="Google Play" />
          <g id="Get it on">
            <path d={svgPaths.p8c85540} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2cc57c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3794f900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p317e7c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d2e7470} fill="var(--fill-0, white)" />
            <path d={svgPaths.p187f1000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d13d000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8c85540} stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.225" />
            <path d={svgPaths.p2cc57c00} stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.225" />
            <path d={svgPaths.p3794f900} stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.225" />
            <path d={svgPaths.p317e7c00} stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.225" />
            <path d={svgPaths.p2d2e7470} stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.225" />
            <path d={svgPaths.p187f1000} stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.225" />
            <path d={svgPaths.p3d13d000} stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.225" />
          </g>
          <g filter="url(#filter0_ii_1_242)" id="Google Play logo">
            <path d={svgPaths.p13a5e580} fill="url(#paint0_linear_1_242)" id="Vector" />
            <path d={svgPaths.p2178a00} fill="url(#paint1_linear_1_242)" id="Vector_2" />
            <g filter="url(#filter1_i_1_242)" id="Vector_3">
              <path d={svgPaths.p3ad25600} fill="url(#paint2_linear_1_242)" />
            </g>
            <path d={svgPaths.p3e139500} fill="url(#paint3_linear_1_242)" id="Vector_4" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.9356" id="filter0_ii_1_242" width="25.976" x="11.2195" y="8.03381">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.16875" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_242" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.16875" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend in2="effect1_innerShadow_1_242" mode="normal" result="effect2_innerShadow_1_242" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="14.4683" id="filter1_i_1_242" width="18.7718" x="11.7403" y="22.5012">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-0.16875" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_242" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_242" x1="24.5258" x2="5.64607" y1="9.79806" y2="28.6778">
            <stop stopColor="#00A0FF" />
            <stop offset="0.0066" stopColor="#00A1FF" />
            <stop offset="0.2601" stopColor="#00BEFF" />
            <stop offset="0.5122" stopColor="#00D2FF" />
            <stop offset="0.7604" stopColor="#00DFFF" />
            <stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_242" x1="38.0626" x2="10.8422" y1="22.5013" y2="22.5013">
            <stop stopColor="#FFE000" />
            <stop offset="0.4087" stopColor="#FFBD00" />
            <stop offset="0.7754" stopColor="#FFA500" />
            <stop offset="1" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_242" x1="27.9314" x2="2.3281" y1="25.0818" y2="50.6851">
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_242" x1="8.20937" x2="19.642" y1="0.199174" y2="11.6318">
            <stop stopColor="#32A071" />
            <stop offset="0.0685" stopColor="#2DA771" />
            <stop offset="0.4762" stopColor="#15CF74" />
            <stop offset="0.8009" stopColor="#06E775" />
            <stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Download() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Download">
      <MediaStoreBadge />
      <MediaStoreBadge1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] items-center justify-center left-[100px] px-[24px] py-[48px] rounded-[12px] top-[64px] w-[1216px]" data-name="Container">
      <Title />
      <Download />
    </div>
  );
}

function Desktop4() {
  return (
    <div className="bg-[#0e7575] h-[453px] overflow-clip relative shrink-0 w-full" data-name="Desktop - 5">
      <Container />
    </div>
  );
}

function Frame111() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4401px] items-start left-0 top-0 w-[1440px]">
      <Header />
      <Desktop />
      <Desktop2 />
      <Desktop6 />
      <Desktop5 />
      <Desktop1 />
      <Desktop3 />
      <Desktop4 />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="relative size-full" data-name="Landing Page">
      <Frame111 />
    </div>
  );
}