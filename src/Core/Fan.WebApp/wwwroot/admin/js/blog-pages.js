Vue.component("pages",{mixins:[pagesMixin],data:()=>({loading:!1}),methods:{deletePage(a){confirm("Are you sure to permanently delete this page and its child pages if any?")&&axios.delete(`/admin/pages?pageId=${a.id}`,{headers:{"XSRF-TOKEN":this.$root.tok}}).then(()=>{let b=this.pages.findIndex(b=>b.id===a.id);if(this.pages.splice(b,1),0<this.parentId)if(a.isChild){let a=this.pages.findIndex(a=>a.id===this.parentId),b=this.pages[a];b.childCount--}else window.location.replace("/admin/pages");this.$root.toast("Page deleted.")}).catch(function(){this.$root.toastError("Delete page failed.")})}}});
//# sourceMappingURL=blog-pages.js.map