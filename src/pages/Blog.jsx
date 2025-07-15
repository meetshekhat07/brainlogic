import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of React: What\'s Coming in 2024',
      excerpt: 'Explore the latest React features and improvements that will shape web development in 2024.',
      category: 'react',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '⚛️',
      tags: ['React', 'JavaScript', 'Web Development']
    },
    {
      id: 2,
      title: 'Magento 2.4.6: New Features and Performance Improvements',
      excerpt: 'Discover the latest Magento release and how it can benefit your e-commerce business.',
      category: 'magento',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '🛒',
      tags: ['Magento', 'E-commerce', 'PHP']
    },
    {
      id: 3,
      title: 'UI/UX Design Trends 2024: Creating Exceptional User Experiences',
      excerpt: 'Discover the latest UI/UX design trends and best practices for creating engaging user experiences.',
      category: 'uiux',
      author: 'Emily Davis',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '🎨',
      tags: ['UI/UX', 'Design', 'User Experience']
    },
    {
      id: 4,
      title: 'Python in 2024: AI/ML Trends and Best Practices',
      excerpt: 'Explore the latest Python trends in artificial intelligence and machine learning.',
      category: 'python',
      author: 'John Smith',
      date: '2024-01-05',
      readTime: '8 min read',
      image: '🐍',
      tags: ['Python', 'AI', 'Machine Learning']
    },
    {
      id: 5,
      title: 'Angular vs React: Choosing the Right Framework in 2024',
      excerpt: 'A comprehensive comparison to help you choose between Angular and React for your next project.',
      category: 'general',
      author: 'Sarah Johnson',
      date: '2024-01-03',
      readTime: '10 min read',
      image: '⚡',
      tags: ['Angular', 'React', 'Comparison']
    },
    {
      id: 6,
      title: 'Java Spring Boot: Microservices Architecture Guide',
      excerpt: 'Learn how to build robust microservices using Spring Boot and best practices.',
      category: 'java',
      author: 'Mike Chen',
      date: '2024-01-01',
      readTime: '9 min read',
      image: '☕',
      tags: ['Java', 'Spring Boot', 'Microservices']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'react', label: 'React' },
    { key: 'angular', label: 'Angular' },
    { key: 'magento', label: 'Magento' },
    { key: 'uiux', label: 'UI/UX' },
    { key: 'java', label: 'Java' },
    { key: 'python', label: 'Python' },
    { key: 'general', label: 'General' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="blog-hero-content text-center"
          >
            <h1>Tech <span className="gradient-text">Insights</span></h1>
            <p className="hero-description">
              Stay updated with the latest trends, best practices, and insights 
              from the world of technology and software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Featured Article</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="featured-post-card"
          >
            <div className="featured-post-image">
              <span className="post-icon-large">{featuredPost.image}</span>
            </div>
            <div className="featured-post-content">
              <div className="post-meta">
                <span className="post-author">{featuredPost.author}</span>
                <span className="post-date">{featuredPost.date}</span>
                <span className="post-read-time">{featuredPost.readTime}</span>
              </div>
              <h3>{featuredPost.title}</h3>
              <p>{featuredPost.excerpt}</p>
              <div className="post-tags">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="post-tag">{tag}</span>
                ))}
              </div>
              <a href="#" className="read-more-btn">
                Read Full Article →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="blog-filters">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts section-padding">
        <div className="container">
          <div className="posts-grid">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="blog-post-card"
              >
                <div className="post-image">
                  <span className="post-icon">{post.image}</span>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-author">{post.author}</span>
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="post-tag">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="read-more">
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="blog-newsletter section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="newsletter-content text-center"
          >
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter and never miss our latest tech insights, 
              tutorials, and industry updates.
            </p>
            <form className="newsletter-form-inline">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input-inline"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
            <p className="newsletter-disclaimer">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="popular-topics section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Popular Topics</h2>
            <p>Explore our most discussed technology topics</p>
          </div>
          <div className="topics-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="topic-card"
            >
              <div className="topic-icon">🚀</div>
              <h3>Web Development</h3>
              <p>Latest trends and best practices in modern web development</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="topic-card"
            >
              <div className="topic-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>Insights into artificial intelligence and ML applications</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="topic-card"
            >
              <div className="topic-icon">☁️</div>
              <h3>Cloud Computing</h3>
              <p>Cloud technologies, deployment strategies, and best practices</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="topic-card"
            >
              <div className="topic-icon">📱</div>
              <h3>Mobile Development</h3>
              <p>Mobile app development trends and cross-platform solutions</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
