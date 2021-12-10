import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  ListItem,
  ListItemText,
  List,
} from '@material-ui/core';
import { useQuestionData } from '@Pages/hooks';
import { isAnswerSelected } from '@Pages/utils';
import React from 'react';

export const Main = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { currentQuestion, currentResponse } = useQuestionData(currentIndex);
  const isSelected = isAnswerSelected(currentResponse);
  return (
    <Card>
      <CardHeader title={`Question ${currentIndex}`} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {currentQuestion.text}
        </Typography>
      </CardContent>
      <CardActions>
        <List>
          {currentQuestion.answers.map((answer, index) => {
            <ListItem key={index} button>
              <ListItemText primary={answer} />
            </ListItem>;
          })}
        </List>
      </CardActions>
    </Card>
  );
};
