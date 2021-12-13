import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  ListItem,
  ListItemText,
  List,
  Button,
  Container,
} from '@material-ui/core';
import { Question, Response } from '@Types';
import { Spinner } from '@Components';
import React from 'react';
import styles from './Main.module.css';
import { isAnswerSelected, calculateScore } from './utils';

export type MainPresentationProps = {
  questionList: Question[];
  responseList: Response[];
  selectAnswer: (questionId: number) => (answerId: number) => void;
};

export const MainPresentation = ({
  questionList,
  responseList,
  selectAnswer,
}: MainPresentationProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentQuestion = questionList[currentIndex];
  const totalQuestion = questionList.length;
  const currentResponse = responseList.find((r) => r.id === currentQuestion.id);

  const nextQuestion = () => {
    setCurrentIndex((currentIndex) => currentIndex + 1);
  };
  const previousQuestion = () => {
    setCurrentIndex((currentIndex) => currentIndex - 1);
  };

  const submitQuestion = () => {
    console.log('total', calculateScore(responseList, questionList));
  };
  const isSelected = isAnswerSelected(currentResponse);
  const handleSelect = selectAnswer(currentQuestion?.id);

  if (!currentQuestion) return <Spinner />;

  return (
    <Container className={styles.container}>
      <Card className={`${styles.questionContainer}`}>
        <CardHeader title={`Question ${currentIndex + 1}/${totalQuestion}`} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {currentQuestion.text}
          </Typography>
        </CardContent>
        <CardActions>
          <List className={styles.list}>
            {currentQuestion.answers.map((answer, index) => (
              <ListItem
                className={styles.listItem}
                focusRipple
                key={index}
                button
                onClick={handleSelect.bind(null, index)}
                selected={isSelected(index)}
              >
                <ListItemText primary={answer.text} />
              </ListItem>
            ))}
          </List>
        </CardActions>
        {currentIndex > 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={previousQuestion}
          >
            Back
          </Button>
        )}
        {currentIndex + 1 < totalQuestion && (
          <Button variant="contained" color="secondary" onClick={nextQuestion}>
            Next
          </Button>
        )}
        {currentIndex + 1 === totalQuestion && (
          <Button
            variant="contained"
            color="secondary"
            onClick={submitQuestion}
          >
            Submit
          </Button>
        )}
      </Card>
    </Container>
  );
};
