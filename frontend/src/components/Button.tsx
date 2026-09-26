//Icons
import { Icon } from "@tabler/icons-react";

//Interface
interface ButtonProps {
  icon: Icon;
  stroke?: number;
  size?: number;
  varient?: boolean;
  text: string;
  textSize?: string;
}

const Button = ({
  icon: IconComponent,
  stroke = 2,
  size = 20,
  varient = false,
  text,
  textSize,
}: ButtonProps) => {
  return (
    <div
      className={`flex flex-row items-center gap-1 p-1.5 ${varient === true ? "bg-[#FDFDFD] hover:bg-[#ececec] text-black" : "bg-[#1A7DFF] hover:bg-[#204c85] text-white"} rounded-md duration-500`}
      style={{
        fontSize: `${textSize}px`,
      }}
    >
      <IconComponent
        stroke={stroke}
        size={size}
        color={varient === true ? "black" : "white"}
      />
      <button className="cursor-pointer">{text}</button>
    </div>
  );
};

export default Button;
