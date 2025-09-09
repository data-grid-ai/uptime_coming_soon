import svgPaths from "./svg-11ii49tsrw";

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

function MainBg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="main_bg">
      <div className="absolute bg-[#f6ffed] h-[1080px] left-0 top-0 w-[1920px]" data-name="main-bg" />
    </div>
  );
}

function TopBanner() {
  return (
    <div className="absolute contents left-0 top-0" data-name="top-banner">
      <MainBg />
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute left-[1066px] size-10 top-[702px]" data-name="arrow">
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
    <div className="absolute contents left-[804px] top-[692px]" data-name="btn">
      <div className="absolute bg-[lawngreen] h-[60px] left-[804px] rounded-[100px] top-[692px] w-[312px]" data-name="btn" />
      <Arrow />
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[0] left-[934px] not-italic text-[#222c24] text-[18px] text-center text-nowrap top-[711px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Join the Driver Waitlist</p>
      </div>
    </div>
  );
}

function MainLogo1() {
  return (
    <div className="absolute aspect-[101.547/47.9993] left-[42.81%] right-[42.86%] top-[142px]" data-name="main_logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 130">
        <g id="main_logo">
          <path d={svgPaths.p3f2a3d80} fill="var(--fill-0, #0F172A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p4d27480} fill="var(--fill-0, #91FF30)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute contents left-[42.81%] right-[42.86%] top-[142px]" data-name="top-bar">
      <MainLogo1 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[525px] top-[142px]">
      <TopBar />
      <div className="absolute font-['Inter:Thin',_sans-serif] font-thin leading-[0] not-italic text-[120px] text-center text-nowrap text-slate-900 top-[467px] translate-x-[-50%] uppercase" style={{ left: "calc(50% + 0.5px)" }}>
        <p className="leading-[normal] whitespace-pre">coming soon</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[960.5px] not-italic text-[18px] text-black text-center text-nowrap top-[299px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">The CDL Hiring Operating System</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[804px] top-[802px]">
      <div className="absolute bg-white h-[60px] left-[804px] rounded-[100px] top-[802px] w-[312px]" data-name="btn">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[0] left-[960.5px] not-italic text-[#222c24] text-[18px] text-center text-nowrap top-[821px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">Mr. Rigg’s Manifesto</p>
      </div>
    </div>
  );
}

export default function Component00ComingSoon() {
  return (
    <div className="bg-white relative size-full" data-name="0.0 coming-soon">
      <Footer />
      <TopBanner />
      <div className="absolute bg-[lawngreen] h-2.5 left-[510px] top-[578px] w-[900px]" />
      <Btn />
      <Group46 />
      <Group7 />
    </div>
  );
}