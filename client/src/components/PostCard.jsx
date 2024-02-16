
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const getCategoryLabel = () => {
    if (post.category === 'reactjs') {
      return 'Country';
    } else if (post.category === 'javascript') {
      return 'Global';
    } else {
      return 'Local';
    }
  };

  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
        <span className='italic text-sm'>{getCategoryLabel()}</span>
        <Link
          to={`/post/${post.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Read article
        </Link>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    // Add more PropTypes for other properties if needed
  }).isRequired,
};

export default PostCard;
