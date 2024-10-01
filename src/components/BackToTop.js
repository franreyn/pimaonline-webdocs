import Image from "next/image";

export default function BackToTop() {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={handleClick} className="to-top-btn"><Image 
          src="/images/top-icon.svg" alt="" width={20} height={20} class="to-top-icon"/><span class="to-top-text">Back to Top</span>
          </button>
    </div>
  );
}