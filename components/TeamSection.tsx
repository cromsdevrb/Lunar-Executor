import { TeamMembers } from "@/constants";

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

export default function TeamSection (){
  return (
    <div className="p-10 max-w-screen-lg mx-auto">
      <div className="text-center mb-4">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">THE TEAM</p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our<span className="text-blue-600"> Team</span>
        </h3>
      </div>
      <div className="sm:grid grid-cols-2 gap-6 my-10">
        {TeamMembers.map((member, index) => (
          <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url('${member.imageUrl}')` }}
              title="Profile Image"
              role="img"
              aria-label={`Profile picture of ${member.name}`}
            />
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
              <div>
                <a
                  href="#"
                  className="text-gray-900 font-bold text-xl mb-2 hover:text-blue-600 transition duration-500 ease-in-out"
                >
                  {member.name}
                </a>
                <p className="text-sm text-gray-600">{member.position}</p>
                <p className="text-gray-500 text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="my-4 flex">
                  <a
                    href={member.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    {/* Facebook SVG */}
                  </a>
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    {/* Twitter SVG */}
                  </a>
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* LinkedIn SVG */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

