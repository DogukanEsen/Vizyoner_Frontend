export default function Mobileapp() {
  return (
    <div className="w-full bg-zinc-100 py-6 md:py-15 px-6">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row">
        <img
          src="https://vizyonergenc.com/v3/images/yslider3.jpg"
          alt="Resim"
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12244.390159865068!2d32.7720099!3d39.8944484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3473322138151%3A0xf06d9746c18c6b23!2sVizyoner%20Gen%C3%A7!5e0!3m2!1str!2str!4v1689856175336!5m2!1str!2str"
          title="Harita"
          className="w-full md:w-1/2 h-64 md:h-auto"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
