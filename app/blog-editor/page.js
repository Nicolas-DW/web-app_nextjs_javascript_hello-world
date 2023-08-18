import Editor from "../components/quill";
import "quill/dist/quill.snow.css"; // Importer le style de Quill
import { PageLayout } from "../components/page-layout";


const BlogEditor = () => {
  return (
    <PageLayout>
      <Editor />
    </PageLayout>
  );
};

export default BlogEditor;

