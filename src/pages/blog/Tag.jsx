import BlogIndex from './Index';
import { useParams } from 'react-router-dom';
export default function BlogTag() {
  const { tag } = useParams();
  return <BlogIndex tag={decodeURIComponent(tag)} />;
}
