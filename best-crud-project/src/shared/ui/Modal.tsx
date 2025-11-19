'use client ';

export const ModalHeader = ({
  label,
  onClose,
}: {
  label?: string;
  onClose: () => void;
}) => {
  return (
    <div className="flex w-full flex-row justify-between">
      <h2>{label}</h2>
      <button className="cursor-pointer" onClick={onClose}>
        X
      </button>
    </div>
  );
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  HeaderLabel?: string;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  HeaderLabel: label,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 px-30 py-50"
      onClick={onClose}
    >
      <div
        className="modal-content flex w-full flex-col gap-3 rounded-sm bg-white px-12 py-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader label={label} onClose={onClose} />
        {children}
      </div>
    </div>
  );
};
