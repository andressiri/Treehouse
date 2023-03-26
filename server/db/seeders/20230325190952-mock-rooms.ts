import { QueryInterface } from "sequelize";

const roomsSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Rooms",
      [
        {
          id: 1,
          name: "Rugrats kindergarden",
          capacity: 15,
          description: [
            "Are you looking for an engaging and nurturing kindergarden program for your child? Look no further than the Rugrats kindergarden classroom!",
            "Our classroom is a bright and colorful space filled with toys, games, and learning materials designed to foster your child's curiosity, creativity, and social-emotional development. Our experienced and caring teacher, Miss Carol, creates a warm and welcoming environment where your child can learn and grow alongside their peers.",
            "In our classroom, your child will have the opportunity to participate in a variety of activities including circle time, small group activities, sensory play, and more. We focus on developing key skills such as language and literacy, math and science, and social skills through play-based learning activities.",
            "We also encourage parent involvement and strive to maintain open communication with families throughout the school year. Our goal is to provide a safe, nurturing, and enriching learning environment where your child can thrive.",
            "Enroll your child in the Rugrats kindergarden program today and give them the gift of a positive and meaningful educational experience!",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
          teacherId: 1,
        },
        {
          id: 2,
          name: "Hey Arnold! school classroom",
          capacity: 30,
          description: [
            "Are you looking for an exciting and engaging elementary school program for your child? Look no further than P.S. 118, the school where Hey Arnold! takes place.",
            "Our classroom is a vibrant and welcoming environment designed to foster your child's love of learning and growth. Our experienced and caring teacher, Miss Slovak, is dedicated to providing a high-quality education that is both challenging and supportive.",
            "Your child will have the chance to engage in a diverse range of activities, such as collaborative problem-solving exercises, group discussions, and creative projects. Our approach to education prioritizes cultivating fundamental skills, such as reading, writing, math, science, and social-emotional learning, through interactive and experiential learning activities.",
            "We also strive to maintain open communication with families throughout the school year and encourage parent involvement in your child's education. Our goal is to provide a safe, inclusive, and inspiring learning environment where your child can thrive.",
            "Enroll your child in this elementary school program today and give them the gift of a positive and meaningful educational experience!",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
          teacherId: 2,
        },
        {
          id: 3,
          name: "Lisa Simpson's classroom",
          capacity: 30,
          description: [
            "If you're seeking an exceptional learning environment for your child, you won't want to miss Lisa Simpson's second and third-grade classroom. This is where the magic happens!",
            "Lisa's classroom is an engaging and dynamic space designed to foster a love of learning and a desire to explore the world. Our experienced teacher is committed to supporting each student's unique needs and interests, providing personalized attention and guidance throughout the year.",
            "At Lisa Simpson's classroom, your child will experience a dynamic and stimulating learning environment that encourages creativity, critical thinking, and collaboration. Our curriculum is designed to cultivate essential skills such as reading, writing, math, science, and social-emotional learning through a variety of hands-on and interactive activities. Your child will have the opportunity to participate in engaging projects, group discussions, and problem-solving exercises that challenge and inspire them to reach their full potential.",
            "We understand the importance of parent-teacher collaboration, and we strive to maintain open communication throughout the school year. Our goal is to create a safe and inclusive learning environment where each student feels confident and supported, both academically and socially.",
            "Enroll your child in Lisa Simpson's second and third-grade classroom today, and watch as their curiosity and confidence soar!",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
          teacherId: 3,
        },
        {
          id: 4,
          name: "Bart Simpson's classroom",
          capacity: 30,
          description: [
            "Parents, if you're looking for a classroom that will engage your child's mind and inspire their creativity, look no further than Bart Simpson's classroom!",
            "Our classroom is an exciting and dynamic space where your child will learn valuable skills that will serve them throughout their academic career. Our experienced teacher, Ms. Krabappel, is dedicated to providing a stimulating and challenging environment that nurtures the potential of each and every student.",
            "Ms. Krabappel is an exceptional teacher who brings a wealth of experience and expertise to the classroom. She is passionate about education and is committed to helping each student reach their full potential. With her guidance, your child will develop the skills they need to succeed academically and beyond.",
            "At Bart Simpson's classroom, we recognize the significance of parent-teacher collaboration, and we maintain transparent communication throughout the school year to ensure that your child receives the necessary support and guidance to succeed. Our primary aim is to establish a safe and inclusive learning environment where each student feels confident and supported.",
            "Enroll your child in Bart Simpson's classroom today, and watch as they develop the skills and confidence they need to succeed in school and beyond!",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
          teacherId: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Rooms", {});
  },
};

export default roomsSeed;
