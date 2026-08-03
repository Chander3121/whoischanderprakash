import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PrimaryButton({
  children,
}: Props) {
  return (
    <Button
      className="
      rounded-full
      px-6
      py-6
      font-medium
      shadow-sm
      hover:scale-105
      transition-all
      duration-300
      "
    >
      {children}
    </Button>
  );
}
