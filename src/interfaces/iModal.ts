export default interface iModal {
  show: boolean;
  onClick: () => void;
  buttonText?: string;
  content: string | string[];
}
