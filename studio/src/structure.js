import S from "@sanity/desk-tool/structure-builder";
import { PostPreview } from "./previews/post";

function filterDocTypes(listItem) {
  return ["config", "post"].includes(listItem.getId()) === false;
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Config")
        .child(
          S.editor()
            .id("config")
            .schemaType("config")
            .documentId("config")
        ),

      S.listItem({
        id: "posts",
        title: "Posts",
        schemaType: "post",
        child: () =>
          S.documentTypeList("post")
            .title("Posts")
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType("post")
                .views([
                  S.view.form().title("Content"),
                  S.view.component(PostPreview).title("Preview")
                ])
            )
      }),

      ...S.documentTypeListItems().filter(filterDocTypes)
    ]);
