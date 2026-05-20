"use client";

export default function FloatingWhatsapp() {

  return (

    <a
      href="https://wa.me/923352088597"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-110
        transition-all
        duration-300
      "
      style={{
        backgroundColor: "#25D366",
      }}
    >

      <img
        src="/images/whatsapp.png"
        alt="WhatsApp"
        className="w-8 h-8"
      />

    </a>

  );

}