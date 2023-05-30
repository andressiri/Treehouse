import { QueryInterface } from "sequelize";

const studentsSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Students",
      [
        {
          name: "Tommy Pickles",
          age: 1,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/tommy-pickles.webp",
          description:
            "He is a brave and adventurous baby who is always eager to explore the world around him, even if it means getting into trouble. He is known for his iconic blue shirt and diaper, and he often carries a screwdriver in his diaper as his trusty tool for problem-solving. Despite his mischievous tendencies, Tommy is a loyal friend to his fellow babies and is always there to help them out when they need it.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 1,
          teacherId: 1,
        },
        {
          name: "Chuckie Finster",
          age: 1,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/chuckie-finster.webp",
          description:
            "He is known for his bright orange hair and iconic glasses. Chuckie is a shy and timid baby who is often fearful of the world around him, but he is also very curious and loves to learn new things. He is a loyal friend to his fellow babies, especially to his best friend Tommy Pickles. Chuckie is also known for his quirky and funny personality, which often lightens the mood in tough situations. Overall, he is a lovable and endearing character.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 1,
          teacherId: 1,
        },
        {
          name: "Phil DeVille",
          age: 1,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/phil-deville.webp",
          description:
            "He is the fraternal twin brother of Lil DeVille. He is distinguishable by his distinctive, spiky hair, and is often seen wearing blue clothing. Phil is adventurous, outgoing, and always ready to try new things, which often leads him and his twin sister into trouble. He is also a loyal friend and often serves as the comedic relief in the group.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 1,
          teacherId: 1,
        },
        {
          name: "Lil DeVille",
          age: 1,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/lil-deville.webp",
          description:
            "She is the younger twin sister of Phil DeVille and has a distinctive personality. Lil is often seen wearing a pink shirt and diaper and has a small bow in her hair. She is known for being mischievous and has a strong bond with her brother, Phil. Despite her playful nature, Lil is also empathetic and caring towards her friends and family.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 1,
          teacherId: 1,
        },
        {
          name: "Angelica Pickles",
          age: 3,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/angelica-pickles.webp",
          description:
            "She is a charismatic and manipulative toddler who loves being the center of attention. She is often seen bossing the babies around and using her quick wit to get what she wants. Despite her strong personality, Angelica sometimes struggles with feelings of loneliness and insecurity, and can be surprisingly vulnerable at times.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 1,
          teacherId: 1,
        },
        {
          name: "Dil Pickles",
          age: 0,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/dil-pickles.webp",
          description:
            "Tommy's younger brother who is always wearing a blue onesie. He's known for his adorable gurgles and his fascination with his toes. As the youngest member of the group, Dil is curious and always eager to learn. He is open-minded and sees the world with a sense of wonder and amazement.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 1,
          teacherId: 1,
        },
        {
          name: "Kimi Finster",
          age: 1,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/kimi-finster.webp",
          description:
            "Chuckie's stepsister who is of Japanese descent. She has pink hair tied up in two buns and is often seen wearing a purple dress. Kimi is adventurous and loves to explore new things. As a new addition to the group, Kimi is adventurous and daring. She is always ready to try new things and encourages her friends to do the same. Her positive attitude and free spirit make her a great addition to the group.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 1,
          teacherId: 1,
        },
        {
          name: "Susie Carmichael",
          age: 4,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/susie-carmichael.webp",
          description:
            "Susie is an African-American girl who is a few years older than the other babies. She is talented, confident, and always willing to stand up for what's right. As a talented and confident performer, Susie is a natural leader. She is kind and empathetic towards others, and always stands up for what is right. She is a role model to her peers and an inspiration to those around her.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 1,
          teacherId: 1,
        },
        {
          name: "Savannah Shane",
          age: 3,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/savannah-shane.webp",
          description:
            "Savannah is a girl who moves in next door to the Pickles family. She's sporty, competitive, and loves a challenge. As a fun-loving and outgoing girl, Savannah is always the life of the party. She is fearless and adventurous, and is always looking for new ways to have fun. Her positive energy is infectious and she is a great friend to have around.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 1,
          teacherId: 1,
        },
        {
          name: "Alisa Carmichael",
          age: 16,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/alisa-carmichael.webp",
          description:
            "Susie's older sister, Alisa is also African-American. She is outgoing, curious, and has a love for all things science-related. She is a great listener and provides valuable advice to her friends when they need it. Her calm and level-headed demeanor make her a trustworthy friend and confidante.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: null,
          teacherId: null,
        },
        {
          name: "Arnold",
          age: 9,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/arnold-shortman.webp",
          description:
            "Arnold is a kind-hearted and optimistic boy who always tries to do the right thing. He's well-liked by his peers and is often called upon to solve problems in his community. Arnold is an orphan who lives with his grandparents, but he doesn't let that define him. He's curious, adventurous, and always eager to learn.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Helga Pataki",
          age: 9,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/helga-pataki.webp",
          description:
            "Helga is a complex character who is known for her tough exterior and sarcastic wit. She's secretly in love with Arnold, but she hides her feelings behind insults and bullying. Helga has a troubled home life and often struggles to deal with her emotions. Despite this, she's a talented writer and artist who has a soft side that she doesn't show to many people.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Gerald Johanssen",
          age: 9,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/gerald-johanssen.webp",
          description:
            "Gerald is Arnold's best friend and a natural leader. He's outgoing, confident, and always up for an adventure. Gerald is known for his storytelling abilities and often regales his friends with tales of his family's history. He's also a talented basketball player and is well-liked by his peers.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Phoebe Heyerdahl",
          age: 9,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/phoebe-heyerdahl.webp",
          description:
            "Phoebe is a shy and intelligent girl who is often seen reading books. She's Arnold's classmate and is known for her analytical mind and attention to detail. Phoebe is a loyal friend who is always willing to help others. She's also a talented singer and musician.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Harold Berman",
          age: 10,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/harold-berman.webp",
          description:
            "Harold is a lovable but often clumsy character who is known for his large size and love of food. He's a loyal friend to Arnold and Gerald, even if he doesn't always understand their adventures. Harold often gets himself into trouble, but he has a good heart and means well.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Rhonda Wellington Lloyd",
          age: 9,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/rhonda-wellington-lloyd.webp",
          description:
            "Rhonda is a fashionable and somewhat snobbish girl who comes from a wealthy family. She is known for her stylish outfits and love of the finer things in life. Rhonda can be self-centered at times, but she's a loyal friend to those she cares about.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Eugene Horowitz",
          age: 9,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/eugene-horowitz.webp",
          description:
            "Eugene is a nervous and accident-prone boy who often finds himself in sticky situations. He's known for his clumsiness and tendency to break things, but he's also a kind-hearted and well-meaning person. Eugene is often the target of bullying, but he never lets it get him down.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Lila Sawyer",
          age: 9,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/lila-sawyer.webp",
          description:
            "Lila is a sweet and kind girl who moves to Arnold's neighborhood. She's instantly popular among the other kids and quickly becomes friends with Arnold. Lila has a gentle spirit and is often the voice of reason in the group. She's also a talented dancer.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Stinky Peterson",
          age: 9,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/stinky-peterson.webp",
          description:
            "Stinky is a southern boy who comes from a family of farmers. He's known for his folksy sayings and homespun wisdom. Stinky is a loyal friend to Arnold and the others, but he can also be stubborn and set in his ways.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Sid",
          age: 9,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/sid.webp",
          description:
            "Sid is a troublemaker who often gets into mischief. He's known for his mischievous grin and quick wit. Sid is often at odds with his classmates, but he's still a part of the group and is occasionally called upon to help with their adventures.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Curly Gammelthorpe",
          age: 9,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/thaddeus-curly-gammelthorpe.webp",
          description:
            "Curly is a quirky and eccentric character who often exhibits odd behavior and unpredictable mood swings. He is portrayed as being extremely enthusiastic about everything, to the point of being overzealous, which often puts him at odds with the other characters. Despite his odd behavior, he is generally well-meaning and has a good heart, and is often willing to lend a hand to his friends, albeit in his own unique way.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 2,
          teacherId: 2,
        },
        {
          name: "Lisa Simpson",
          age: 8,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/lisa-simpson.webp",
          description:
            "Lisa is the most intelligent student in her class and is known for her love of learning and her saxophone skills. She is often seen as an outsider due to her intellectual nature and her activism for various causes.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Janey Powell",
          age: 8,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/janey-powell.webp",
          description:
            "Janey is Lisa's best friend and a straight-A student. She is intelligent, level-headed, and well-behaved, but also enjoys gossiping and talking about boys. Janey often serves as a voice of reason for Lisa, helping her to see things from a different perspective.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Allison Taylor",
          age: 8,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/allison-taylor.webp",
          description:
            "Allison is a new student who moves to Springfield from Capital City. She is highly intelligent and excels academically, but also struggles with perfectionism and anxiety. Allison often clashes with Lisa, as they both vie for the title of top student in the class.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Üter Zörker",
          age: 8,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/uter-zorker.webp",
          description:
            "Allison is a new student who moves to Springfield from Capital City. She is highly intelligent and excels academically, but also struggles with perfectionism and anxiety. Allison often clashes with Lisa, as they both vie for the title of top student in the class.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Ralph Wiggum",
          age: 8,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/ralph-wiggum.webp",
          description:
            "Ralph is a sweet but simple-minded boy who often says and does things that are bizarre or inappropriate. He is well-liked by his classmates, but often struggles with social cues and fitting in. Ralph also has a crush on Lisa, which she does not reciprocate.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Wendell Borton",
          age: 8,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/wendell-borton.webp",
          description:
            "Wendell is often seen sleeping in class and is known for his lack of energy. He is a gentle soul and has a talent for drawing.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Alex Whitney",
          age: 8,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/alex-whitney.webp",
          description:
            "Alex is a wealthy girl who often flaunts her family's money and possessions. She is confident and outgoing, but also somewhat shallow and materialistic. Despite her flaws, Alex is still well-liked by her classmates and often invites them to her family's parties and events.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Sherri Mackleberry",
          age: 8,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/sherri-mackleberry.webp",
          description:
            "Sherri is one of a pair of identical twins, along with her sister Terri. She has shoulder-length purple hair and wears a red dress with a white collar. Sherri is known to be one of the most popular girls in Lisa's class, often seen hanging out with her sister and their friends. She is usually portrayed as being more outgoing and confident than Terri.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Terri Mackleberry",
          age: 8,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/terri-mackleberry.webp",
          description:
            "Terri is the other half of the identical twin duo, with shoulder-length purple hair and the same outfit as her sister. She is often portrayed as being more reserved and introverted than Sherri, although the two are usually seen together. Terri is also known for being a top student, often getting the highest grades in the class.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Martin Prince",
          age: 8,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/martin-prince.webp",
          description:
            "Martin is a highly intelligent and academically successful boy who is often seen as a teacher's pet. He can be somewhat arrogant and pretentious at times, but also has a vulnerable side and can be emotionally sensitive.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Lewis Clark",
          age: 8,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/lewis-clark.webp",
          description:
            "Lewis is a quiet and unassuming student who often blends into the background. He is known for his artistic ability and often draws portraits of his classmates.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 3,
          teacherId: 3,
        },
        {
          name: "Bart Simpson",
          age: 10,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/bart-simpson.webp",
          description:
            "Bart is a mischievous and trouble-making boy who is often seen getting into mischief with his best friend, Milhouse. Despite his rebellious nature, Bart has a good heart and is capable of acts of kindness and empathy towards others.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 4,
          teacherId: 4,
        },
        {
          name: "Milhouse Van Houten",
          age: 10,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/milhouse-van-houten.webp",
          description:
            "Milhouse is Bart's best friend and a somewhat nerdy boy who is often picked on by bullies. Despite this, he is loyal to his friends and has a good heart, although he can sometimes be a bit insecure and indecisive.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 4,
          teacherId: 4,
        },
        {
          name: "Nelson Muntz",
          age: 10,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/nelson-muntz.webp",
          description:
            "Nelson is a tough and bullying boy who often picks on weaker kids, including Bart and Milhouse. Despite this, he is shown to have a softer side and occasionally demonstrates moments of kindness and empathy.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 4,
          teacherId: 4,
        },
        {
          name: "Database",
          age: 10,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/database.webp",
          description:
            "He is known for his high level of technological proficiency and often uses his computer skills to help his friends with various tasks. He is also known for his nervous and anxious demeanor, often worrying about various scenarios and outcomes.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 4,
          teacherId: 4,
        },
        {
          name: "Jimbo Jones",
          age: 14,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/jimbo-jones.webp",
          description:
            "Jimbo is the leader of the bullies and is known for his signature purple knit cap. He is often seen smoking and causing trouble with Nelson and the rest of the gang.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 4,
          teacherId: 4,
        },
        {
          name: "Dolph Starbeam",
          age: 13,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/dolph-starbeam.webp",
          description:
            "Dolph is one of the members of Nelson's gang and is often seen alongside Jimbo and Kearney. He has a distinctive haircut with a cowlick in the front.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 4,
          teacherId: 4,
        },
        {
          name: "Kearney Zzyzwicz",
          age: 14,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/kearney-zzyzwicz.webp",
          description:
            "Kearney is another member of Nelson's gang and is known for his bald head and muscular build. He often joins Jimbo and Dolph in their pranks.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 4,
          teacherId: 4,
        },
        {
          name: "Dubya Spuckler",
          age: 13,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/dubya-spuckler.webp",
          description:
            "He is often shown wearing overalls and a straw hat. Frequently making foolish decisions and struggling to understand complex ideas. Despite his lack of intelligence, he is portrayed as being good-hearted and caring towards his family.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 4,
          teacherId: 4,
        },
        {
          name: "Erik",
          age: 12,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/erik.webp",
          description:
            "Erik is depicted as being quite anxious and paranoid about the possibility of a catastrophe, often taking extreme measures to ensure his survival. He is also shown to be quite resourceful and skilled in various survival techniques, such as hunting and trapping. Despite his often intense demeanor, Erik cares deeply about his friends and fellow preppers and is willing to go to great lengths to protect them.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: 4,
          teacherId: 4,
        },
        {
          name: "Maggie Simpson",
          age: 1,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/maggie-simpson.webp",
          description:
            "She is a cute and curious baby with a tuft of hair on top of her head and big, innocent eyes. Despite her young age, Maggie is often portrayed as a resourceful and intelligent character, who can fend for herself and even save the day when necessary. She is also known for her signature pacifier, which she rarely lets go of.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: null,
          teacherId: null,
        },
        {
          name: "Jessica Lovejoy",
          age: 9,
          gender: "female",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/jessica-lovejoy.webp",
          description:
            "She is known for being a troublemaker and a bad influence on Bart. She is depicted as being manipulative and sneaky, often lying to get what she wants. Despite her misbehavior, Jessica is still popular among her peers and has a large group of friends. She is often seen hanging out with Sherri and Terri Mackleberry, and is known for her rebellious and somewhat intimidating personality.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: null,
          teacherId: null,
        },
        {
          name: "Rod Flanders",
          age: 11,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/rod-flanders.webp",
          description:
            "Rod is depicted as being devoutly religious, often quoting the Bible and attending church services with his father. He is portrayed as being polite, well-behaved, and innocent, but also somewhat naive and sheltered due to his upbringing.",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: null,
          teacherId: null,
        },
        {
          name: "Todd Flanders",
          age: 10,
          gender: "male",
          picture:
            "https://asiritreehouse.s3.sa-east-1.amazonaws.com/migrations/students/todd-flanders.webp",
          description:
            "He is a devout Christian like his family and is known for his innocent and pure-hearted nature. He is often seen alongside his brother and is usually kind to everyone he meets, even those who are mean to him. ",
          createdAt: new Date(),
          updatedAt: new Date(),
          roomId: null,
          teacherId: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Students", {});
  },
};

export default studentsSeed;
