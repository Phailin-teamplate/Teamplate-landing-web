import Image from "next/image";

const teamMembers = [
  {
    name: "SANGHWAN HYUN",
    role: "CEO & Founder",
    image: "/pf3.jpg",
  },
  {
    name: "SOKAMNOUI OUDOMSOUK",
    role: "IT Developer",
    image: "/pf4.jpg",
  },
  {
    name: "PHAILIN KHODYOTHA",
    role: "IT Developer",
    image: "/pf1.jpg",
  },
  {
    name: "NAMFON SENGMANY",
    role: "CUSTOMER SERVICE",
    image: "/pf2.jpg",
  },
];

export default function Teams() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>

      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative w-[350px] h-[350px]">
            {" "}
            <Image
              src={teamMembers[0].image}
              alt={teamMembers[0].name}
              layout="fill" /* Ensures image fills the container */
              objectFit="cover" /* Crop image to cover the container */
              className="rounded-lg" /* Rounded corners */
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-black p-4 rounded-lg w-full max-w-xs">
              <div className="text-center">
                <h3 className="text-sm font-semibold">{teamMembers[0].name}</h3>
                <p className="text-xs">{teamMembers[0].role}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {teamMembers.slice(1).map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative w-[350px] h-[350px]">
                {" "}
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill" /* Ensures image fills the container */
                  objectFit="cover" /* Crop image to cover the container */
                  className="rounded-lg" /* Rounded corners */
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-black p-4 rounded-lg w-full max-w-xs">
                  <div className="text-center">
                    <h3 className="text-sm font-semibold truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
