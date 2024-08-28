import React, { useContext, useState } from "react";
import "./Userprofile.css";
import { Newcontext } from "../App";
import { Button, Card } from "react-bootstrap";

function Userprofile() {
  const [data, setdata] = useContext(Newcontext);

  const [conut, setConut] = useState(200);

  const [Like, setLike] = useState(10);

  const [Showtext, setShowtext] = useState(false);

  const [post, setpost] = useState([
    {
      title: "Hello world",
      desc: "hello everyone how are you all",
      img: "https://i.pinimg.com/236x/46/15/70/46157045d8a9a3ad6172acbadadad375.jpg",
    },
  ]);

  const handleclick = () => {
    setConut(conut + 1);
    setShowtext(!Showtext);
  };

  const handleunfollow = () => {
    setConut(conut - 1);
    setShowtext(!Showtext);
  };

  const [showlike, setshowlike] = useState(false);

  const hanldelike = () => {
    setLike(Like + 1);
    setshowlike(!showlike);
  };

  const handledislike = () => {
    setLike(Like - 1);
    setshowlike(!showlike);
  };

  return (
    <div>
      <div className="Banner">
        <div style={{ padding: "100px", borderRadius: "2rem" }}>
          {data.map((user, index) => (
            <Card
              key={index}
              style={{
                width: "1200px",
                // padding: "20px",
                border: "none",
                background: "none",
              }}
            >
              <img
                src={
                  user.profileImage ||
                  "https://i.pinimg.com/564x/49/a6/1e/49a61eda901e65412f1619e96df713b8.jpg"
                }
                alt="Profile"
                className="profile"
              />
              <div className="bio">
                <h1 className="title">{user.username}</h1>
                <h5>{user.bio}</h5>
                <h5>{user.place}</h5>
                <h5>Followers: {conut}</h5>

                {Showtext ? (
                  <Button
                    variant="primary"
                    onClick={handleunfollow}
                    style={{ width: "100px ", marginLeft: "6px" }}
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={handleclick}
                    style={{ width: "100px" }}
                  >
                    Follow
                  </Button>
                )}
                {/* <button onClick={()=>setShowtext(!Showtext)}>change</button> */}
              </div>
            </Card>
          ))}
        </div>
        <div className="posts">
          <h2>Posts</h2>
          <div className="post">
            {post.map((demo) => (
              <Card style={{ width: "18rem", margin: "6px" }}>
                <Card.Img variant="top" src={demo.img} />
                <Card.Body>
                  <Card.Title>{demo.title}</Card.Title>
                  <Card.Text>{demo.desc}</Card.Text>
                  <h6>likes {Like}</h6>
                  {showlike ? (
                    <Button onClick={handledislike}>
                      Dislike {}
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={hanldelike}
                      style={{ marginRight: "6px" }}
                    >
                      Like {}{" "}
                    </Button>
                  )}
                    <Button>Comment</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
