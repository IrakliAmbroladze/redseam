import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-[948px] h-[1000px] relative">
        <Image src="/loginImg.png" alt="login-image" priority fill />
      </div>
      {children}
    </div>
  );
}
