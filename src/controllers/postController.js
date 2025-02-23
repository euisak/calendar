export const home = (req, res) => res.render("home", { pageTitle: "Home" });


export const trending = (req, res) => {
  /*const posts = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];*/
  return res.render("home", { pageTitle: "Home", posts });
};


export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const login = (req, res) => res.send("Login");
export const deletePost = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
