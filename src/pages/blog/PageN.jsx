import BlogIndex from './Index';
import { useParams } from 'react-router-dom';
export default function BlogPageN() {
  const { n } = useParams();
  const pageIndex = Math.max(1, parseInt(n, 10) || 1);
  return <BlogIndex pageIndex={pageIndex} />;
}
