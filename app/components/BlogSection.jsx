const blogPosts = [
    {
      id: 1,
      title: 'Metaverse Engine V2: Persistent Identity Across 1v1 Fighter Games',
      excerpt: 'Diving into the code for interoperable gaming experiences.',
      imageUrl: '/path/to/image-1.jpg',
      articleUrl: 'https://medium.com/p/ab08397f12c8'
    },
    {
      id: 2,
      title: 'A DIY Guide to High-Security Cryptography',
      excerpt: 'A deep dive into the mathematics behind Elliptic Curve Cryptography(ECC), the cryptography that enable Ethereum.',
      imageUrl: '/path/to/image-2.jpg',
      articleUrl: 'https://medium.com/p/5c85a5fd8934'
    },
    {
      id: 3,
      title: 'The Metaverse Engine 2.0 A High Level Look',
      excerpt: 'Exploring how blockchain technology can be leveraged to create interoperable gaming systems',
      imageUrl: '/path/to/image-3.jpg',
      articleUrl: 'https://medium.com/p/6648f8aaa275'
    },
    {
      id: 4,
      title: 'Offensive Smart Contract Hacking',
      excerpt: 'Because the best defence is a good offence.',
      imageUrl: '/path/to/image-3.jpg',
      articleUrl: 'https://medium.com/p/ce8da6e3c097'
    },
  ];
  
  const BlogCard = ({ title, excerpt, imageUrl, articleUrl }) => (
    <div className="max-w-md rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <div className="p-5">
        <a href={articleUrl}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{excerpt}</p>
        <a href={articleUrl} className="text-white bg-sunset-gold hover:bg-sunset-gold-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center">Read More</a>
      </div>
    </div>
  );
  
  const BlogSection = () => {
    return (
      <div className="py-12 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6  flex justify-center">Latest Articles</h2>
          <div className="flex flex-wrap justify-center">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogSection;
  