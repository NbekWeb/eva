import { defineStore } from "pinia";
import { api } from "@/utils/api.js";
import useCore from "@/stores/core.pinia.js";

const useBlog = defineStore("blog", {
  state: () => ({
    blogs: [],
    blog: {},
  }),
  actions: {
    getBlogs(params,callback) {
      const core = useCore();
      core.loadingUrl.add("blogs/");
      api({
        url: "blogs/",
        method: "GET",
        params,
      })
        .then(({ data }) => {
          this.blogs = data;
          callback(data)
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("blogs/");
        });
    },
    getBlog(id) {
      const core = useCore();
      core.loadingUrl.add("blogs/id");
      api({
        url: `blogs/${id}/`,
        method: "GET",
      })
        .then(({ data }) => {
          this.blog = data;
        })
        .catch(() => {})
        .finally(() => {
          core.loadingUrl.delete("blogs/id");
        });
    },
  },
});

export default useBlog;
