import BAHeader from "../layout/BAHeader";
import BAFooter from "../layout/BAFooter";
import { useEffect, useState } from "react";
import { getData, updateData, deleteData } from "../config/firebaseMethods";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

function AllQuestions() {
  const [allQuestions, setAllQuestions] = useState<any>([]);
  const getQuestions = () => {
    getData("questions")
      .then((data: any) => {
        setAllQuestions([...data]);

        console.log(data);
      })
      .catch((error: any) => {
        {
          console.log(error);
        }
      });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleEdit = (index: number) => {
    const question = allQuestions[index];
    const editedQuestion = prompt("Edit question:", question.question);
    if (editedQuestion) {
      updateData("questions", question.id, {
        question: editedQuestion,
        createdAt: question.createdAt,
        id: question.id,
      })
        .then((data: any) => {
          alert(data.toString());
          getQuestions();
        })
        .catch((error: any) => {
          alert(error.toString());
        });
    }
  };

  const handleDelete = (index: number) => {
    const question = allQuestions[index];
    deleteData("questions", question.id)
      .then((data: any) => {
        alert(data.toString());
        getQuestions();
      })
      .catch((error: any) => {
        alert(error.toString());
      });
  };

  return (
    <>
      <BAHeader />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S No</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Question</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allQuestions.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.question}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <BAFooter />
    </>
  );
}
export default AllQuestions;
