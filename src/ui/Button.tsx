import { ButtonProps } from "../type";

const Button = ({ title, id, rightIcon, leftIcon, btnClass }: ButtonProps) => {
   return (
      <button
         id={id}
         className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${btnClass}`}
      >
         {leftIcon}
         <span className="relative incline-flex overflow-hidden font-general text-s uppercase">
            <div>{title}</div>
         </span>
         {rightIcon}
      </button>
   );
};
export default Button;
