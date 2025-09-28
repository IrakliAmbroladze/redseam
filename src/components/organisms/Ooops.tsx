import Link from "next/link";
import { OrangeButton } from "../atoms";
import Image from "next/image";

export const Ooops = ({
  setIsShown,
}: {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col gap-10 pt-20 justify-center items-center">
      <Image src="/ooops.svg" alt="congrats" width={233} height={216} />
      <h1 className="text-2xl font-semibold!">Ooops!</h1>
      <div> You’ve got nothing in your cart just yet...</div>
      <Link href={"/"} onClick={() => setIsShown(false)}>
        <OrangeButton>Start shopping</OrangeButton>
      </Link>
    </div>
  );
};
