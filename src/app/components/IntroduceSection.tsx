export function IntroduceSection() {
  const getDaysAgo = (dateString: string): string => {
    const pastDate = new Date(dateString);
    const today = new Date();

    const diffTime = today.getTime() - pastDate.getTime(); // ✅ dùng .getTime() để đảm bảo là number
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) {
      return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
    } else {
      const diffMonths = Math.floor(diffDays / 30);
      return `${diffMonths} month${diffMonths === 1 ? '' : 's'} ago`;
    }
  };


  return (
    <section id="introduce" className="min-h-screen px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">VO THI BICH CHI</h2>
        <p className="text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center">
          I'm a passionate web developer with a strong focus on building seamless digital experiences and writing clean, maintainable code. I have hands-on experience in both frontend and backend development, and I enjoy turning ideas into responsive, user-friendly applications. I'm constantly learning and adapting to new technologies to deliver high-quality solutions. Collaboration, creativity, and problem-solving are at the heart of my development approach.
        </p>

        <p className="text-sm text-center text-gray-400">Updated since: {getDaysAgo("2025-07-19")}</p>
      </div>
    </section>

  )
}
