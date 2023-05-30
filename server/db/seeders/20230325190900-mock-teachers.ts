import { QueryInterface } from "sequelize";

const teachersSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Teachers",
      [
        {
          name: "Miss Carol",
          age: 54,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/teachers/miss-carol.jpg",
          description:
            "Miss Carol is a skilled and nurturing teacher who fosters a welcoming and inclusive learning environment for her students. With her years of experience and expertise, Miss Carol is committed to ensuring that each child in her classroom receives the individual attention and support they need to thrive. Her teaching methods are engaging and interactive, and she encourages students to express themselves creatively through art, music, and other activities. In Miss Carol's classroom, your child will learn fundamental skills such as reading, writing, and math, as well as valuable social-emotional skills such as empathy, cooperation, and communication.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Miss Slovak",
          age: 32,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/teachers/miss-slovak.jpg",
          description:
            "Miss Slovak is a warm and caring teacher who is deeply invested in her students' academic and personal growth. Her approach to education is centered on fostering a positive and inclusive classroom environment where students feel valued and supported. With her expertise and years of experience, Miss Slovak utilizes innovative and engaging teaching methods that cater to each student's unique learning style. She encourages students to express themselves creatively through writing, art, and other mediums. In Miss Slovak's classroom, your child will develop a broad range of skills, including critical thinking, problem-solving, communication, and social-emotional learning. With Miss Slovak as their teacher, your child will be equipped with the tools they need to achieve academic success and personal fulfillment.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mrs. Hoover",
          age: 41,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/teachers/mrs-hoover.jpg",
          description:
            "Mrs. Hoover is a compassionate and dedicated teacher who brings her passion for education to the classroom every day. Her teaching style is nurturing and supportive, and she creates a safe and inclusive environment that fosters learning and growth. Mrs. Hoover has a wealth of experience and knowledge, and she utilizes a range of teaching strategies to ensure that every student in her class is engaged and challenged. From developing strong foundational skills in reading, writing, and math to exploring new concepts in science and social studies, Mrs. Hoover's curriculum is designed to promote academic success and personal fulfillment. In addition to her academic focus, Mrs. Hoover also emphasizes social-emotional learning, helping students build resilience, empathy, and strong interpersonal skills. With Mrs. Hoover as their teacher, your child will have the tools and support they need to thrive both academically and personally.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ms. Krabappel",
          age: 47,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/teachers/ms-krabappel.webp",
          description:
            "Ms. Krabappel is a dynamic and experienced teacher who is dedicated to ensuring that every student in her classroom has the opportunity to succeed. Her teaching style is engaging and interactive, and she is always looking for new and innovative ways to inspire her students to learn. Ms. Krabappel places a strong emphasis on the development of foundational skills in reading, writing, and math, while also providing opportunities for students to explore their interests and develop their creative talents. With her wealth of knowledge and experience, she creates a supportive and inclusive classroom environment that encourages students to take risks and challenge themselves. She is also committed to fostering strong social-emotional skills in her students, helping them build empathy, self-awareness, and resilience. With Ms. Krabappel as their teacher, your child will have the tools and support they need to thrive both academically and personally, and develop a lifelong love of learning.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Principal Skinner",
          age: 46,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/teachers/principal-skinner.webp",
          description:
            "Principal Skinner is a dedicated and disciplined individual with a strong sense of responsibility. He takes his role as a school principal seriously and strives to maintain order and structure within the educational environment. Skinner is known for his meticulous attention to detail and adherence to rules and procedures. He is highly organized and methodical in his approach, ensuring that the school runs efficiently. While he may come across as strict and authoritarian at times, Skinner genuinely cares about the well-being and education of the students under his supervision. He is driven by a desire to provide a safe and productive learning environment for all. Outside of his professional life, Skinner may exhibit moments of vulnerability and a dry sense of humor. Overall, he is a conscientious and dedicated individual who takes his responsibilities as an educator seriously.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Teachers", {});
  },
};

export default teachersSeed;
