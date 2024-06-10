import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "AI Grammar Correct",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczORGNNTmsVEQt4g_k2gW5eCrpA2O8sJZBeoNGhM-sb7YOF8bl0VbqznA4HtuZ2ycHjlw_tf8QVnHhdWjwOnD4TkLeakloYu61iU6U6lnD1wu4R9TkNk-vpzINDtzu6IpbD15pmUweHvutKBmxnAIyu8HE5IvjzoTfWiXnFzAUYVAG-J5qHhWmX35zy05-4sVM0kyJiLBG-qNdX4qQ5Q649mWTIN8JUqokjzPi6m3E2eTMXW3iojgbgt9PKCsUa9LJVwlmyBEdE6AEj9dpIt_k0I-PUNabyeYO3r6XUGaIy3FMV7SZbBhwkRANF8vGgUDPD7WGzd3ZmTUc0kEHjroVbphbhohqGLERpHT9qzrXOmEDg6a5bneQWwu7SzNPaqoS4cLHhhOTWH8tmSMNYOSeokjidLaiHMyqLQrZQvVRM5zWDS81nWY_mLb_-NtUz_9o4Xz5nesRRn2LlUaZdT1Hcl-5oPFpYQlwPqaMd2dQf4HLelh9eW3EIxNP57ljtbrv76yzrQD--OSQm5tINF6QSffnhryG1VDeGY_bpIEvz8KdkORDg1Sf8Fp5erU5V7bRtf6Mn7x2WKlXUfm7jV47uuIe_Gx-i7ebmXDvSaAbfGOqOUq1_XM3xLSJtFzmLM8HG4jMIw0m4GuQj60XPGQVNzhWe8sY8YQKN09lDmuzn6gSn6Qav1YSjkr08ygMdALbfK-2n7gWdfez22SWuedh27LmFaXubFn6n6scngJxOjsDmS_m0bARxPRrV1NdEQ8_eQ_lljSvkecsc8rL1FkZhLUce6xJDrsyR3tJjiOQUNtyf3FRHNUDpIu7t41Di51eJz256yC2RAL5RniZhRppktb_eFCIPb3b4lnJKNfrS2yelIrlxSlL7qgNy90CxK6PyrOI4C-imwcV2M3YdnjkTtRsjHsWBpLaN_lKxz6Alm12jrR5uO_mGnSKozduB84v_6UNRPNeZ_UHJanT_aAGgK1ysOCM39XWf73BE9V_gK2iUisaNQf3iUC_frd1IX8edkrNglyHblt7ol5XYgFUN613pSC3KOXW5lGPc=w1190-h583-s-no-gm?authuser=0",
      demoLink: "https://gramarly.vercel.app/",
      codeLink:
        "https://github.com/devSatyendraNarayan/Object-detection-System-",

      technologies: ["Gemini API", "React JS"],
    },
    {
      id: 2,
      title: "Object Detection System",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczMg_8hd0y7c_RZAuRX7f0vpWybV6AzPDbQ07yUg5UBNof2Vn8BSuUUFhH-lM9xf7wKDdzL1FEXvt57Qw7Kyu4XJMp4JgV8CjTQHz6Nn33ZrUwDkFbiC9wVbRXysEYGtZKfOa8Nm4-_9uDl5u3tSjKB5cJMMqRd9-9aeyVzM0kra6Gk7wg5PgXtnsPEgC9Wft5VSz_sJzGMUKP1eAZUHiSSEV7-uzGiA_R2ODSxWx-BsFfaWlV6WSod_Uih8PQwBEZ7ioM9M5MHfrAYW0FY8BR_uo3WBemhq4XdyuZ9K6LoYAXcHqtZdzriX-0KOURY-qV-sjFyTD5un9pc06wJKrX1kOo833BKqM9Yd4JjZhn0gfE1Nuhqxel8n-CnuzwVryIN4fzFNhchcfJ3PauJTmi0ATyUPq0bDLOwjRKgecdRsA98vDijZn6CtV7bY4oKaZ7svWmcVuw67v3MVmdcm4vL6gzhqAR3l4LqzZuYjieHY8VwHOwLOGSjFgeKtfun9KR7kf27CUobRPJhN3SYqIGXlMMJ_kRzqgTIMTb-JEitz2-Wf68gwhUy5jWoNxQQ6LpPgxqdBz9F_WFawtjJDpxb9TW5JkqLVQemUT-40wwUuUlneUTmoQ4t8NPp6PdbEFChLWa69FVQVhpz5clcippwgvVld0LznURMFOP3gnzeijAlVFyjNHaWmBZ_3pOXLose20AiCRC-sOcjmXKzppdIwIX7nIZOIgFbqBDL3-f5BBtbdb99UAmDQ_JxqHacNv1JtaMF2-SkHF0ULtrPJAfc6ckyIcIEwhBHoIs9iG4dfnFyjk80UxQU82qPNh-vZLtBQHH7_vkCRGHpstcZQvJukMy-e6cwW0B9C9IiTZbu5IZoWPvUnRkPBVhW2IXSmlx5faid5hh5LHjwkuaBIrzoKbVknv-bDmMl7Q7SOwGaPmepGNMv2gzfVV4irrooHKUbXLxbPgb6TtpQsLFZz_LXhTgAVJ2IH92S5mJmj8fiMmHcbyrd5vdWqcBL3n3obU-ilx3_JjkBJFGwxgg2xukMmVbaI5PpQfqk_uJs=w1190-h583-s-no-gm?authuser=0",
      demoLink: "https://object-detection-system.vercel.app/",
      codeLink:
        "https://github.com/devSatyendraNarayan/Object-detection-System-",
      technologies: ["Tensorflow JS", "Next JS"],
    },
    {
      id: 3,
      title: "GIF Gallery",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczM6CajijoYy1QHAAjKKcZHUMPztjsGri-FIaTlpEQCs4Y0ia9FFWe3LR0ImOdjz37_SulRLdKF9fOkFDa7RgPtEUBYi42AgFOAC4X5VqDPg-gYLvLam8TKGO2mWcI7zW0MBIQKhzP4iakXvpzxDZExHrrwXhlYA9yiuRCsbAO6nljFeG7AioApb8GElGvInqcAXPqx-zn8m4OzeNRegt5rk_Hs5MyAbEnikARxNh_hnHZdEUj3T2zNNEYpCPpvQh00tYr2w39Dr8jHFGlAuAE1ErzpsxACnEcFJo9u3yvd4uDmbRon9U2XAaNRrtwX6-LhrtyCncPA2m6ARs0-xCWo4N-tyR-KPjsi-V3EM3x-oMbra0CRj2KtdVjkqcrNnshKYvSwj4nrfW33Ih_wfdiV8FxYP9zqjn2zPFeosmmiv0qCELkdo04zoXcTLzuVKKkO3xc61ovlUqJiQBXOS73-FnOA-gUH6sSuo7bA6m7-n8xJXO5QS2hT1ZFpZMq6pthaN3uPq2-4AV3OkQ4yTFQiWqCp-eughh9woqvAO5-v59S8xenYqKRo2dNvl8q0UNbZPLr6zHrvFGaE4RdrRiAd9lA6L5h_iKqY_OrkbtcizXqROtbSNeiaJMqR1iX1pWUBs4C0q5EVYxooEuIVENb4dEYzHDM3arOpTofGHdmn6fmI6nFEh-QPunowpnnu50x-88OzlXHAIqEWEqYXJEd4ZARv2GV4-euRY1rIN2wfttAdmJ0RPI6FQG6r4Sg-GzZzXT_dn88ZfMacGIXkE-777GLjlJ-C9NKBt2IWFHgSql3jKNntVxntu6Qf2vmGUOxLgW2qN8MXk7m09kMoYHooVi2Oqve8XCB8Cu489KKvOsB4R3hBGckzOIwrDGuhDYvRALhPBlq5at_6ZZ8_YGsMiC299P-NWCrewGji6t9iljim-EaA9zWSrwMbeNpdnQpzwa73nwr8YYdX3Plw3qLI8GsNPZyeBV9wiaPAwQx_6rH79PSm_hYh5jDcaSouBfe6p1V4vy4s_XpqD7-MYk6ZVIMoYz72kRQXo22DO=w627-h646-s-no-gm?authuser=0",
      demoLink: "https://gif-gallery-ruby.vercel.app/",
      codeLink:
        "https://github.com/devSatyendraNarayan/GIF-Gallery/tree/main/client",
      technologies: ["GIPHY API", "React JS"],
    },
    
  ];

  return (
    <div className="min-h-screen select-none flex flex-col items-center mx-auto justify-center">
      <div className="flex flex-col items-center">
        <p className="text-md">My Portfolio</p>
        <h1 className="text-3xl text-purple-500">Projects</h1>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-wrap mt-5 flex-col mb-10 lg:mb-0  justify-center gap-5 ">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="card w-96 bg-base-100 shadow-xl relative mb-5"
          >
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-purple-500 rounded-full absolute right-2 text-xs top-2 flex items-center justify-center cursor-pointer"
              >
                View Code
              </a>
            )}
            <figure className="px-10 pt-10">
              <img
                src={project.imageUrl}
                alt={`${project.title} project`}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-start text-center">
              <h2 className="card-title">{project.title}</h2>

              <div className="w-full">
                <div className="card-actions flex items-center justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-300"
                  >
                    Demo<FaArrowRightLong />
                  </a>
                  <div className="space-x-2">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="badge badge-outline">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
