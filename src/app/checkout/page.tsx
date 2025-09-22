import { CartBoard, Input } from "@/components";
import { Headline, OrangeButton } from "@/components/atoms";

const CheckoutPage = () => {
  const fields = [
    { name: "name", placeholder: "Name" },
    { name: "surname", placeholder: "Surname" },
    { name: "email", placeholder: "Email" },
    { name: "address", placeholder: "Address" },
    { name: "zipcode", placeholder: "Zip code" },
  ];

  return (
    <div className="px-[100px]">
      <Headline> Checkout</Headline>
      <div className="flex justify-between h-[635px]">
        <div className="h-[635px] w-[1129px] bg-[#F8F6F7] rounded-2xl">
          <div className="w-[578px] flex flex-col gap-10 my-12 mx-8">
            <div className="font-medium text-2xl">Order details</div>
            <div className="flex justify-between ">
              {fields.slice(0, 2).map((f) => (
                <div key={f.name} className="w-[277px] ">
                  <Input {...f} />
                </div>
              ))}
            </div>
            <Input {...fields[2]} />
            <div className="flex justify-between">
              {fields.slice(3).map((f) => (
                <div key={f.name} className="w-[277px]">
                  <Input {...f} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[635px] w-[460px] flex flex-col gap-20">
          <CartBoard />
          <OrangeButton px={60} py={16}>
            pay
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
