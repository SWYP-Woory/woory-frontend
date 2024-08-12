import ImageDelete from '@/assets/icons/delete/imageDelete.svg';

export default function ImageDeleteIcon() {
  return (
    <button type="button" aria-label="Image Delete Button" className="delete-image-button">
      <ImageDelete />
    </button>
  );
}
