import React from 'react';
import Image from 'next/image';
import blogDetails from '../data/blog-details.json';

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};

const Blog = () => {
    return (
        <section id="blog-page" className="max-w-[1440px] mx-auto pt-24 p-4 xs:p-5 xs:pt-24 sm:pt-20 md:pt-20 md:p-6 xs:mt-10 md:my-12 xl:pt-20 2xl:pt-24">
            <div className="w-full mx-auto">
                {blogDetails.map((blog) => (
                    <a key={blog.id} className="flex flex-wrap my-6 xs:my-8 xs:mx-4 sm:mx-8">
                        <figure className="basis-full md:basis-2/5">
                            <Image src={`/static/images/blog/${blog.image}`} width={500} height={500} alt={blog.alt} className="block mx-auto" />
                        </figure>

                        <div className="basis-full md:basis-3/5 border-t-4 md:border-t-0 md:border-l-8 border-white mt-6 md:mt-0 pt-2 md:pt-0 xs:p-2 sm:p-4 md:pl-3">
                            <h1 className="text-white text-xl lg:text-2xl 2xl:text-[1.8em] mb-2 font-bold italic leading-6">{blog.title}</h1>
                            <p className="text-black text-sm lg:text-md xl:text-base 2xl:text-lg">{truncateText(blog.paragraph1, 400)}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Blog;