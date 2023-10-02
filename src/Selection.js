import React from "react";
import { Form, Checkbox } from "semantic-ui-react";
import Question from "./Question";
import ArticleSection from "./Article";
import FindQuestion from "./FindQuestion";
import "./Selection.css";

function Selection() {
  const [value, setValue] = React.useState("Question");
  return (
    <>
      <Form>
        <Form.Field>
          <b style={{ fontSize: "18px" }}>Selected value: {value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={<b style={{ fontSize: "16px" }}>Question</b>}
            name="checkboxRadioGroup"
            value="Question"
            checked={value === "Question"}
            onChange={(e, data) => setValue(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={<b style={{ fontSize: "16px" }}>Article</b>}
            name="checkboxRadioGroup"
            value="Article"
            checked={value === "Article"}
            onChange={(e, data) => setValue(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={<b style={{ fontSize: "16px" }}>Find Question</b>}
            name="checkboxRadioGroup"
            value="FindQuestion"
            checked={value === "FindQuestion"}
            onChange={(e, data) => setValue(data.value)}
          />
        </Form.Field>
      </Form>

      {value === "Question" ? <Question /> : null}
      {value === "Article" ? <ArticleSection /> : <FindQuestion />}
    </>
  );
}

export default Selection;
