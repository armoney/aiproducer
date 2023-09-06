const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const userData = [
  {
    name: "Armon Arcuri",
    email: "armonsf+0000@gmail.com",
    phone: "5555550000",
    jobProfiles: {
      create: [
        {
          website: "https://seev.work",
          portfolio: "https://github.com/armoney/aiproducer",
          mainRole: "Software Engineer",
          yearsWorked: "5",
          serviceOrProduct: "FullStack web applications",
          industryName: "Tech",
          accomplishments:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tellus eu lorem tempor elementum vitae ac turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas feugiat id mauris eu euismod. Donec mattis velit nec libero pharetra, vitae commodo urna luctus. In ullamcorper viverra lobortis. In sit amet elementum dui, in sollicitudin ipsum. Cras tincidunt mi nisl, sit amet pellentesque risus fringilla quis. In sit amet tempus elit.",
          attributes: "calm,passionate",
          softSkills:
            "Curabitur metus urna, aliquet in condimentum et, placerat ac lectus.",
          techSkills: "Javascript, React, NodeJS",
          workExperience:
            "Suspendisse id placerat quam, non porta nibh. Proin congue, est in rutrum imperdiet, libero elit euismod quam, in malesuada ex sem iaculis odio. Vestibulum dapibus auctor auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sodales, metus vel dictum vulputate, est dolor malesuada metus, ac tincidunt est lorem et massa. Vestibulum ac tellus nunc. Nulla congue nec risus nec pulvinar. Ut sed metus quis orci ullamcorper sodales. Vivamus sollicitudin ligula nisi, mattis hendrerit nisi facilisis eget. Maecenas blandit non ipsum ac pharetra. Curabitur nunc erat, rutrum a suscipit vitae, gravida sit amet nunc. Sed quis leo a erat dignissim placerat a quis quam. Donec ac purus id nunc maximus tempus sit amet sit amet sapien. Duis non dui ornare, ullamcorper erat ut, aliquam ante. Donec vulputate enim eu eros molestie, et hendrerit velit rutrum.",
          principles:
            "Always be coding, Sleep is for when I am ded, Get'er done",
          music: "NIN, Radiohead, BeeGees",
          otherMedia: "The Wire, Breaking Bad, Mad Men",
          hobbies: "Outdoors, camping, public land activities",
        },
      ],
    },
  },
  {
    name: "Josh Murphy",
    email: "armon1984+0000@gmail.com",
    phone: "5555550000",
    jobProfiles: {
      create: [
        {
          website: "https://seev.work",
          portfolio: "https://github.com/armoney/aiproducer",
          mainRole: "Producer",
          yearsWorked: "12",
          serviceOrProduct: "Video Production",
          industryName: "Media",
          accomplishments:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tellus eu lorem tempor elementum vitae ac turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas feugiat id mauris eu euismod. Donec mattis velit nec libero pharetra, vitae commodo urna luctus. In ullamcorper viverra lobortis. In sit amet elementum dui, in sollicitudin ipsum. Cras tincidunt mi nisl, sit amet pellentesque risus fringilla quis. In sit amet tempus elit.",
          attributes: "calm,passionate",
          softSkills:
            "Curabitur metus urna, aliquet in condimentum et, placerat ac lectus.",
          techSkills: "Adobe Photoshop",
          workExperience:
            "Suspendisse id placerat quam, non porta nibh. Proin congue, est in rutrum imperdiet, libero elit euismod quam, in malesuada ex sem iaculis odio. Vestibulum dapibus auctor auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sodales, metus vel dictum vulputate, est dolor malesuada metus, ac tincidunt est lorem et massa. Vestibulum ac tellus nunc. Nulla congue nec risus nec pulvinar. Ut sed metus quis orci ullamcorper sodales. Vivamus sollicitudin ligula nisi, mattis hendrerit nisi facilisis eget. Maecenas blandit non ipsum ac pharetra. Curabitur nunc erat, rutrum a suscipit vitae, gravida sit amet nunc. Sed quis leo a erat dignissim placerat a quis quam. Donec ac purus id nunc maximus tempus sit amet sit amet sapien. Duis non dui ornare, ullamcorper erat ut, aliquam ante. Donec vulputate enim eu eros molestie, et hendrerit velit rutrum.",
          principles: "Eat Sleep film repeat",
          music: "Taylor Swift, James Taylor, Wesley Willis",
          otherMedia: "Barney, Queer Eye",
          hobbies: "Biking",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
