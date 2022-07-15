import React from "react";
import "./Stories.css";
import { Link } from "@material-ui/core";
import { Story } from "../../Components";
import { useStateValue } from "../../StateProvider";
function Stories() {
  const [{ user }] = useStateValue();

  return (
    <div className="stories">
      <div className="stories__top">
        <h4>Stories</h4>{" "}
        <Link style={{ textDecoration: "none", cursor: "pointer" }}>
          <small>See all</small>
        </Link>
      </div>
      <div className="stories__bottom">
        <Story
          avatar_src={user?.photoURL}
          bgsrc={
            "data:image/jpeg;base64,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"
          }
        />
        <Story
          avatar_src={` https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
          bgsrc={
            "data:image/jpeg;base64,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"
          }
        />
        <Story
          avatar_src={` https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
          bgsrc={
            "data:image/jpeg;base64,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"
          }
        />
        <Story
          avatar_src={` https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
          bgsrc={
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AZAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQADBgIBBwj/xAA2EAABAwMCBAMGBQMFAAAAAAABAgMRAAQhEjEFQVFhInGBEzKRobHwBhQjQsEHM/FSkqLR4f/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACIRAAICAQQCAwEAAAAAAAAAAAABAhEDEhQhUQQxEyJBMv/aAAwDAQACEQMRAD8A+1oNWihkKq9OawEd1KlSsElSpUrGJUqVKxiVKlSsY8NVrNdmqlmsBlZOalVqVmvaYUrTcNpVClgGim1pUJSoHyr5zbfiHXAdBB6inljxkBEtqAnc1R4mRjm55NUu6ZQCSsE9BVJ4kicNqjrSI8QDiiVEeIyYqxL6DzrLGjPM/wAHq7pKmtTWe/SvG3SkKK3UrE4A3pMHQdjVF9xFjh9o5c3DmhtAyqJoOCSGWRyfBoBfICSpaFAdd6pXxNse6D6isnwP8VWXG7ly2tVL1ITqEmQoemx7U5KQaMYxfJskpxdMZtcSSsxzopL+r9ppDoFWC5dbb0JWdPSi8a/BY5GvY6W5HI1Q4+gb4pJ+ZcR7qqrdv1xlIntQ+MzzDcvonepWdVxDOZqU3xC/MYNleAFCO9MbZahBSqswxcXBKTimLD9wDpCAeeKvRJmtYeUQNSj50aysmYOOtZhl+6UmYgc8Uwt1PqA8XyrULY7U+RhBx1rK/jjjVovhDtgm9Y9s4oSk5wPLntTW84k1w+2Ll1n/AEpESvtmvkPELdty6ccs0BphxWpDYMhA6TUpriqOjB/WqzU/0zSprjzrofZUEMKGnUQoyR+0+VfUBfAb18T/AA4V8O4oxdo9kXGydIdMJEggyfKvpHCeO2/F3XWmkaXm0hSgFSImN/OjjikjZ23K0ab88Dsan51JME0pUhQ3kCq1LjYq9BT0jntjVy4T1oN64HWgVvFM+P8A3CKGce1DB+Fag+wtVwJ3qUmW94jk/CpRBTFdm9aumEuCRuI2pxbW9uog600ltLNhl5TjcJUsQYVTtgHTuY5wa85+Y+j1Nin+h+uwtWg5cPtNomAVGJprYmyuGQ4y+y4g7KSoEGsvxfhbPF2W2bu4cSlC9XgUkT9aY8Ls7Wws/wAs1qW3n+4oKOaV+awrwF2Z3+qlwhtzhrNu6kyFqUUqGxgfwaxrbuqJECMCmn9Q3EHjbbTYAQi3RAHLKqQleY2IAxM1048mpWTniUfqX3Cgchenke4p3/Tm8Sx+KGEuq8FwFMqM4zt8wKzC1k13Z3BtX23kEhTagoEdjRcuTaPrR+ii1aDCnEA+dDuN2SV6fao1HOmRPnSJXD2HVhxTt7qGcXTg+QNRy0b9qh0Kc9o2CErUrUQDuM+Vce7fRbZLsaPM2JmVp9KV3DViDh4CTAzQl7btvMlp5bqkatXvkZ9KWqtW2k+BbwEyJdUc/Gm3cuhdlHsPUizJMOqNSlKlGT+os17R3cujbKPYgYdTpTKyAedHO3qwhSULhSDo2kkxNVtsMkqCxqBAB9PsUcLZJ8SSRJOoTtNcckjvVg1o7cmFOkZG1NLdS1LBU9A6E70IzwvGhUlASVTOcnb4CmDHCw3qCJLhONQwBUZRHjIyv4z4eTeW9006HQ4A2sjGkzj6/KkV4WkD2bSIM+JR3PYdq3l7wB24ZDTYSg69QUc7GY+o+FYTiFqWFqlRI1wMbDqenPHY13+NlWjS/ZyZ8b16l6AzVlojXeMIGSp1I+Yom64cplaEJMqWtYknAAVA9d6bcA4BeHi9q+WtVqj9T2v7SRMDzmKpLJFK7FjBtn0hu/AkayY7Vyq9n3RJ5jGKFabQ20QUkqOa8W622mEJGfvNeVFs9BpFd3frTj2SdudLnLzV/dQjO0V3cOIcIKpSBOxpc680lZIgz1zVVZJosdvmULKdE+lSglOJWonT2qVQQqtXg4oBWfCCY5b4pih4pUAkFRJAkeVILUzrWkAEqEDqBv8AWiLS8Wl5aVkBYCjB54FCUAxkaVNyUriZTgkg0e1cgtAqWNsEYrMypOpRCiIk6cTJ/wCqOfuUwnThJyYHpFRaKj83RSFFpQ8IgCNzWD4ild1ds2upIcce0uqSNjPL0+lPLR1Z9qsuANtmAOhxPzk0I9bo/PC4c8LTOUhKdJUvB1fKPs02N6G2xZrUkkLOJMfleIPoSQUIUYgyUydW58623ASE8KtgpQkJKsedZriwDjjagAXFFJKkokkZo5u/Dby7ZsnS0ymY9J286abcoo0ai2aAvaQZMHvQdwnVqAPKfOlrvEC6kuoIKTzkVWb8kQcDeJme80FZnRY6EQRoESrA6fcUscZUhxGJSBOc8qIW+ClRUSVDA70M7dohCs6lECOh+zVYiSKUsHJWoSrO0xXldJfVACE7YM15TkhPbrCNKicD/iOVdrWElxxJ1Fe3bH/hoL2moOaiAnGBtXqFhGgqzAETVHEVSHTd8VNgpMrIGqRONv5o0XTIZJUASZyeUbCfOKziVlEqJGc4q1m5CW4XJGrPeovF0WWTsfIuW2GEotoSTKox72wn5VY+lTjLv6g1OOAJAxsImkbdyFOKdUB1jkSTvTJD6HHrUEpQhKUkGCc7xU3BodSTL33GSpM6lraAGMyoYANABaCguiQ7gqTPcn+KqUtaLpatYKSvMRJMdKji29KwkGSoErV1z3pkqVCN27C2/wBOyd8SgorQtAjMGQefahm7khuDPvR6Yz8YodD0FaZmfEBGwGYk0MlwuQFCQVHVE4n/ABVFDsm5Da7uNKloCvcEaqBU6ZSDgyI85/xQr1xqW4ADMkGeleByG0OT4kkEg+dOoUBzCU3EzKsjG9Slrq5VMGYzmpT6RdRzqhHWcmpr+kVE/wBvvvNcTtTChAdCmVTuBj41C7BCokCABtmKpJ5dgKtbJOgcte3kKFUFM7QuF6Tt08quK1SUg+IJBwdqG911XPB+lXrUU3b2Z0Jj4RStBTCWmdLmrWSNJWTMTjH1qtaghSdyEgExkAmu7xRDZaTATBUY55HyoJLiikg8+dKlfIW64L1OAupWgQgiD/P33qsSCpJAOx6x9zXBw2IPKfiK8QqPaKgTinSFs4d1JWQczmoXJCk8uU9qsvFfrDH7frQ+/rTIB4Tneva5qUwT/9k="
          }
        />
        <Story
          avatar_src={` https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
          bgsrc={
            "data:image/jpeg;base64,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"
          }
        />
        <Story
          avatar_src={` https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
          bgsrc={
            "data:image/jpeg;base64,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"
          }
        />
      </div>
    </div>
  );
}

export default Stories;