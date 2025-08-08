import { useParams } from 'react-router-dom';
export default function WordDetailPage() {
  const { id } = useParams();
  return <div className="container"><h4 className="mt-4">Word Detail: {id}</h4></div>;
}
