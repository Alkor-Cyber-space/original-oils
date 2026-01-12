import Image from "next/image";

const blogData = [
  {
    slug: "on-the-way-back-from-munnar",
    title: "On the Way Back from Munnar",
    image: "/blogs/journal1.png",
    content: [
      "On my way back from Munnar, my driver suggested that I visit a traditional oil mill nearby.The shop had a simple and clean look, with the natural smell of oils filling the air.I took time to look at all the oils, and each one felt pure and natural.This visit was not planned, but it became one of the most memorable moments of my trip.",
      "The shop had a simple and clean look, with the natural smell of oils filling the air. It reminded me of old village oil mills. The staff spoke kindly and explained how the oils were made using traditional methods. Listening to their story made me appreciate the hard work and honesty behind each product.",
      "I took time to look at all the oils, and each one felt pure and natural. The quality was clear from the texture and aroma. I chose a few bottles to take home, thinking they would be perfect for my family.",
      "This visit was not planned, but it became one of the most memorable moments of my trip. I left the shop feeling happy and satisfied. I am thankful my driver showed me this place, and I would surely recommend it to anyone traveling through this route who values purity and tradition."
    ],
  },
  {
    slug: "my-journey-with-hair-fall-after-delivery",
    title: "My Journey with Hair Fall After Delivery",
    image: "/journal2.png",
    content: [
      "After my delivery, my life changed in many ways. Along with taking care of my baby, I also started noticing a big change in my hair. At first, the hair fall was small, so I ignored it. Everyone around me said post-delivery hair fall is common and will stop soon.",
      "But slowly, it became worse. Every time I washed my hair, a lot of hair fell out. I felt scared to comb my hair because the comb would be full of broken strands. My hair became thin, weak, and lifeless. Even tying my hair felt painful.",
      "Emotionally, it affected me a lot. I already felt tired and overwhelmed as a new mother, and losing my hair made me feel less confident. I avoided mirrors and stopped taking pictures.A close friend noticed my sadness and told me about this oil. She said it helped her when she went through hair problems. I was not expecting magic, but I wanted to try something natural and safe.",
      "I started using the oil twice a week. I applied it slowly and massaged my scalp gently. The oil felt very calming and light. It didn’t burn or itch, which was important for my sensitive scalp",
      "After about two weeks, my scalp felt healthier. It was less dry, and the hair fall slowly reduced. It didn’t stop suddenly, but it became less frightening.",
      "After two months, I noticed small new hairs growing near my hairline. That moment gave me hope and happiness. I finally felt like things were getting better.",
      "This oil helped me during one of the most emotional phases of my life. It gave me confidence, patience, and care when I needed it the most"
    ],
  },
  {
    slug: "from-my-grandmother-to-my-daughter",
    title: "From My Grandmother to My Daughter",
    image: "/journal3.png",
    content: [
      "Some memories stay with us forever. For me, it is the pure smell of coconut oil from a traditional oil mill.",
      "When I was a child, I used to go with my grandmother to buy coconut oil and badam oil. The shop was simple, but the smell of fresh oil filled the air. That smell was pure and comforting. My grandmother trusted the mill because the quality was honest and natural.",
      "As I grew up, life changed, but this hair oil stayed with me. I used it from my childhood to my younger years, just like my grandmother did.",
      "Many years later, I visited the same oil mill again—this time with my daughter. The moment I entered, I felt the same smell. Nothing had changed. The purity, the process, and the care were still the same.",
      "Seeing my daughter there made me emotional. Three generations have trusted the same oil. What my grandmother gave me, I am now giving my daughter.",
      "That day, I did not just buy oil. I took home memories, trust, and a tradition that continues from one generation to the next."
    ],
  },
];

export default async function BlogDetailPage({ params }) {
  // ✅ THIS IS THE KEY LINE
  const { slug } = await params;

  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return <p className="p-10">Blog not found</p>;
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Image + Title */}
        <div className="relative h-[420px] rounded-2xl overflow-hidden bg-black">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
    className="object-contain scale-[1.70]"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl font-serif text-center px-6">
            {blog.title}
          </h1>
        </div>

        {/* Content */}
        <article className="mt-10 space-y-6 text-gray-700 leading-relaxed">
          {blog.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </article>

      </div>
    </section>
  );
}
