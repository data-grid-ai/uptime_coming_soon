import svgPaths from "./svg-ld0wrb2hmf";
import img20DriverPage1 from "figma:asset/b64996b8c4a4606bde0414c4ab9ae892784fff0b.png";

function SocialIcon() {
  return (
    <div className="absolute contents font-['Font_Awesome_5_Brands:Regular',_sans-serif] leading-[0] not-italic text-[24px] text-[rgba(255,255,255,0.3)] text-nowrap top-[5333px] translate-x-[-50%]" data-name="social_icon" style={{ left: "calc(50% - 717.5px)" }}>
      <div className="absolute top-[5333px]" style={{ left: "calc(50% - 750px)" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre"></p>
      </div>
      <div className="absolute top-[5333px]" style={{ left: "calc(50% - 706px)" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre"></p>
      </div>
    </div>
  );
}

function BtmSection() {
  return (
    <div className="absolute contents left-0 top-[5306px]" data-name="btm-section">
      <div className="absolute bg-[rgba(255,255,255,0.15)] h-20 left-1/2 top-[5306px] translate-x-[-50%] w-[1920px]" data-name="bg" />
      <div className="absolute font-['Inter:Light',_sans-serif] font-light leading-[0] not-italic opacity-50 right-[380px] text-[0px] text-nowrap text-white top-[5338px] translate-x-[100%]">
        <p className="leading-[normal] text-[14px] whitespace-pre">
          Copyright 2025<span>{` © `}</span>
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">uptime</span>
        </p>
      </div>
      <SocialIcon />
    </div>
  );
}

function Location() {
  return (
    <div className="absolute contents left-[1385px] top-[5109px]" data-name="location">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[1421.23px] not-italic text-[16px] text-white top-[5109px] w-[288.77px]">
        <p className="leading-[26px]">3046 S Macon Cir, Aurora, CO, 80046</p>
      </div>
      <div className="absolute h-6 left-[72.14%] right-[26.96%] top-[5110px]" data-name="location_icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
          <g id="location_icon" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.p25466900} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf3a000} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="absolute contents left-[1382px] top-[5050px]" data-name="email">
      <a className="[white-space-collapse:collapse] absolute block font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[1421px] not-italic text-[16px] text-nowrap text-white top-[5050px]" href="mailto:t.e.n.aesthetics@gmail.com">
        <p className="cursor-pointer leading-[normal] whitespace-pre">uptime@uptime.com</p>
      </a>
      <div className="absolute aspect-[31/21.33] left-[71.98%] right-[26.77%] top-[5052px]" data-name="emai_icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17">
          <path d={svgPaths.p634a100} fill="var(--fill-0, white)" id="emai_icon" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute contents left-[1382px] top-[4984px]" data-name="phone">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[1421.23px] not-italic text-[16px] text-nowrap text-white top-[4985.58px]">
        <p className="leading-[24px] whitespace-pre">+12147781233</p>
      </div>
      <div className="absolute aspect-[32/32] left-[71.98%] right-[26.77%] top-[4984px]" data-name="phone_icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p2fe4a900} fill="var(--fill-0, white)" id="phone_icon" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute contents left-[1382px] top-[4984px]" data-name="right_side">
      <Location />
      <Email />
      <Phone />
    </div>
  );
}

function MainLogo() {
  return (
    <div className="absolute aspect-[100.231/47.3776] left-[10.94%] right-[78.81%] top-[4964px]" data-name="main_logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197 93">
        <g id="main_logo">
          <path d={svgPaths.p38848b00} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1d6bfd80} fill="var(--fill-0, #91FF30)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function LeftTop() {
  return (
    <div className="absolute contents left-[210px] top-[4964px]" data-name="left-top">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[210px] not-italic opacity-50 text-[12px] text-nowrap text-white top-[5077px]">
        <p className="leading-[22px] whitespace-pre">Drive Your Career Forward With Us</p>
      </div>
      <MainLogo />
    </div>
  );
}

function TopSection() {
  return (
    <div className="absolute contents left-[210px] top-[4964px]" data-name="top-section">
      <RightSide />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[48px] not-italic text-[0px] text-[16px] text-nowrap text-white top-[4964px] whitespace-pre" style={{ left: "calc(50% - 46px)" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Bold',_sans-serif] font-bold mb-0 underline">Home</p>
        <p className="mb-0">
          <span className="font-['Inter:Light',_sans-serif] font-light not-italic">Services</span>
          <span>
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Light',_sans-serif] font-light not-italic">{`About Us     `}</span>
        </p>
        <p className="font-['Inter:Light',_sans-serif] font-light">Contact Us</p>
      </div>
      <LeftTop />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-0 top-[4814px]" data-name="footer">
      <div className="absolute bg-slate-900 h-[572px] right-0 top-[4814px] w-[1920px]" data-name="main_bg" />
      <BtmSection />
      <TopSection />
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute left-[1027px] size-10 top-[636px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow">
          <circle cx="20" cy="20" fill="var(--fill-0, #0F172A)" id="base" r="20" />
          <path d={svgPaths.p354521a0} fill="var(--fill-0, white)" id="arrow_2" />
        </g>
      </svg>
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute contents left-[844px] top-[626px]" data-name="btn">
      <div className="absolute bg-[lawngreen] h-[60px] left-[844px] rounded-[100px] top-[626px] w-[233px]" data-name="btn" />
      <Arrow />
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[0] left-[950.5px] not-italic text-[#222c24] text-[18px] text-center text-nowrap top-[645px] translate-x-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">submit</p>
      </div>
    </div>
  );
}

function Country() {
  return (
    <div className="absolute contents left-[1011.78px] top-[509px]" data-name="country">
      <div className="absolute bg-[#c9c9c9] h-px left-[1011.78px] rounded-[40px] top-[575px] w-[368.217px]" data-name="sep" />
      <div className="absolute h-[7.071px] left-[1351px] top-[550px] w-[12.142px]" data-name="down-arrow">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 8">
          <path d={svgPaths.p281e4100} fill="var(--fill-0, #0F172A)" id="down-arrow" />
        </svg>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[1012px] not-italic text-[#222c24] text-[16px] text-nowrap top-[544px]">
        <p className="leading-[normal] whitespace-pre">USA</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[1011.78px] not-italic text-[12px] text-[rgba(34,44,36,0.5)] top-[509px] uppercase w-[89.724px]">
        <p className="leading-[normal]">Country</p>
      </div>
    </div>
  );
}

function Phone1() {
  return (
    <div className="absolute contents left-[540px] top-[509px]" data-name="phone">
      <div className="absolute bg-[#c9c9c9] h-px left-[540px] rounded-[40px] top-[575px] w-[368px]" data-name="sep" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[540px] not-italic text-[#222c24] text-[16px] top-[544px] w-[125.846px]">
        <p className="leading-[normal]">Data Grid Ltd|</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[540px] not-italic text-[12px] text-[rgba(34,44,36,0.5)] text-nowrap top-[509px] uppercase">
        <p className="leading-[normal] whitespace-pre">Phone #</p>
      </div>
    </div>
  );
}

function Component2ndRow() {
  return (
    <div className="absolute contents left-[540px] top-[509px]" data-name="2nd-row">
      <Country />
      <Phone1 />
    </div>
  );
}

function Email1() {
  return (
    <div className="absolute contents left-[1011.78px] top-[393px]" data-name="email">
      <div className="absolute bg-[#c9c9c9] h-px left-[1011.78px] rounded-[40px] top-[459px] w-[368.217px]" data-name="sep" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[1011.78px] not-italic text-[#222c24] text-[16px] top-[428px] w-[226.057px]">
        <p className="leading-[normal]">yourcompany@email.com</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[1011.78px] not-italic text-[12px] text-[rgba(34,44,36,0.5)] top-[393px] uppercase w-[89.724px]">
        <p className="leading-[normal]">Work Email</p>
      </div>
    </div>
  );
}

function CoName() {
  return (
    <div className="absolute contents left-[540px] top-[393px]" data-name="co-name">
      <div className="absolute bg-[#222c24] h-0.5 left-[540px] rounded-[40px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] top-[457px] w-[368.217px]" data-name="sep" />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[540px] not-italic text-[12px] text-[rgba(34,44,36,0.5)] top-[393px] uppercase w-[117.689px]">
        <p className="leading-[normal]">Company Name</p>
      </div>
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[540px] not-italic text-[#222c24] text-[16px] top-[428px] w-[125.846px]">
        <p className="leading-[normal]">
          Data Grid Ltd<span className="text-[#3fdd3e]">|</span>
        </p>
      </div>
    </div>
  );
}

function Component1stRow() {
  return (
    <div className="absolute contents left-[540px] top-[393px]" data-name="1st-row">
      <Email1 />
      <CoName />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute contents left-1/2 top-[343px] translate-x-[-50%]" data-name="form">
      <div className="absolute bg-white h-[393px] left-1/2 rounded-[24px] shadow-[0px_5px_15px_0px_rgba(34,44,36,0.1)] top-[343px] translate-x-[-50%] w-[1000px]" data-name="base" />
      <Btn />
      <Component2ndRow />
      <Component1stRow />
    </div>
  );
}

function Close() {
  return (
    <div className="absolute left-[1438px] size-9 top-[329px]" data-name="close">
      <div className="absolute inset-[-41.67%_-55.56%_-69.44%_-55.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g id="close">
            <g filter="url(#filter0_d_2_68)" id="base">
              <circle cx="38" cy="33" fill="var(--fill-0, white)" r="18" />
            </g>
            <g id="close_icon">
              <path d={svgPaths.p4bf800} fill="var(--fill-0, #0F172A)" />
              <path d={svgPaths.p27f76cc0} fill="var(--fill-0, #0F172A)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="76" id="filter0_d_2_68" width="76" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_68" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_68" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component01ComingSoonForm() {
  return (
    <div className="absolute bg-white h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="0.1 coming-soon-form">
      <Footer />
      <div className="absolute bg-[#000000b3] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] h-[1080px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1920px]" data-name="2.0 driver-page 1" style={{ backgroundImage: `url('${img20DriverPage1}')` }} />
      <Form />
      <Close />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Component01ComingSoonForm />
    </div>
  );
}