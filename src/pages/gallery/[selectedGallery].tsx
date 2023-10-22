import { useRouter } from "next/router";

const SelectedGallery: React.FC<any> = () => {
    const router = useRouter();
    return <>{router.query.selectedGallery}</>;
};

export default SelectedGallery;
