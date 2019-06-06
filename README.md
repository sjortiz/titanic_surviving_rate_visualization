# Titanic survivor rate

## Initialize

### Pre-requisites

- Python3 or Python2

### Steps

- Navigate to the folder where you cloned or downloaded this repo, in the console.

for python3:
- type `python -m http.server`

for python2:
- type `python -m SimpleHTTPServer 8000`

For windows
- Open your browser and type: http://127.0.0.1:8000

For unix-based systems (OS X, Linux)
- Open your browser and type: http://0.0.0.0:8000

## Summary

In this visualization, we can observe that the women overalls (represented by the blue bubbles) had a significant large survivor rate than the men (represented by the orange bubbles).

We can see that being part of a high-class group also augmented the survival rate, therefore the first and second class had a better rate.

We can see another variable, the age, the people in their early adulthood (20-29) had a better survival rate.

When we combine all of these things we can see that the largest group of survivors corresponds to the ones that matched all of these criteria (Young "Wealthy" Women).

## Original
<img src="https://dha4w82d62smt.cloudfront.net/items/332K45142L0y3m1i0S21/Image%202018-04-08%20at%208.28.34%20PM.png"/>

## Final
![result-image](https://github.com/sjortiz/titanic_surviving_rate_visualization/blob/master/img/result-graph.png)


## Design Chooses

I decided to go with a bubble-chart as this was one of best options to represent the 4th main variables of our findings.

The bigger the bubble, the bigger the number of survivors, I decided to use Pclass in the x-axis to show a clear distinction between these groups.

I choose to divide the bubbles by coloring based on the sex as I wanted to make clear the fact that the sex was a really important factor.

I choose to change the age to a range to reduce the noise caused by the overplotting as most of the people had a different age, therefore, making the visualization clever.

All of this was based on a trade-off, we can't show the total amount of survivors as we could with a bar-chart or a histogram, anyway, we couldn't establish a clear pattern like this in a single histogram.

## Feedbacks

### Genesis Alvarez

#### What do you notice in the visualization?
	Men from the third class surviced more than other classes, few children survived.

#### What questions do you have about the data? what's the amount they survived?
	What's the amount that survived?

#### What relationships do you notice? 
	Most of the survivors were 40 years old or younger

#### What do you think is the main takeaway from this visualization?
	women survived more

### Misael Andre

#### What do you notice in the visualization?
	I notice the different beliefs among the classes when it comes who deserves priority

#### What relationships do you notice?
	Between the second class and the third class the amoutn of children survivors look alike

#### Is there something you don’t understand in the graphic?
	The graphic doesn't shows if this happens because there were more womans than mens

#### What do you think is the main takeaway from this visualization?
	That whelty people survivor more, maybe they where closer to the lifeboats?

### James Alday

#### What do you notice in the visualization?
	Pclass is a bad label
	Age ranges are uncommon

#### What questions do you have about the data?
	total number of women/men? Hard to tell if it’s a lot of deaths

#### What relationships do you notice?

### Maria de Jesus

#### What do you notice in the visualization?
	It's hard to tell the exact values
	Women from the first class in the range of 31-40 surviver more than the womens from other classes of the same range

#### What questions do you have about the data?
	How many survivors where there in totall?

#### What relationships do you notice?
	There is a correlation between the sex and the age, we can see in the graph that the group of women in the ages of 21-30 always survived more, across the classes.

#### What do you think is the main takeaway from this visualization?
	Welthy womans survived more

#### Is there something you don’t understand in the graphic?
	Why there weren't any survivor littler girl

## Resources

- Projects From the datavisualization course (specific the world cup games)
- Dimple.Js webpage for code examples (http://dimplejs.org/examples_viewer.html?id=bubbles_matrix)
- Change label of an axis (https://stackoverflow.com/questions/23291200/dimple-js-how-can-i-change-the-labels-of-a-chart-axis-without-changing-the-data)
- Insert Images in a markdawn page (https://guides.github.com/features/mastering-markdown/)
