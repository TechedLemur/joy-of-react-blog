import { getBlogPostList } from '@/helpers/file-helpers';
import React from 'react';
import BlogSummaryCard from '@/components/BlogSummaryCard';


async function Blogs() {
  const blogs = await getBlogPostList();
  return <>
    {blogs.map((blog) => {
      return <BlogSummaryCard
        key={blog.slug}
        slug={blog.slug}
        title={blog.title}
        abstract={blog.abstract}
        publishedOn={blog.publishedOn}
      />
    })}
  </>;
}

export default Blogs;
