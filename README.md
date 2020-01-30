# lightweight responsive charts




```javascript

    <script src="../dist/grph.min.js"></script>


    var chart = new Grph({
        type: 'bar',
        canvas: document.getElementById('c'),
        data: [
            { name: 'Satisfied', count: 1043, color: '#A015FC' },
            { name: 'Neutral', count: 80, color: '#AC3AF8' },
            { name: 'Unsatisfied', count: 300, color: '#B65DF1' },
            { name: 'No comment', count: 100, color: '#C380EF' }
        ]
    });

    window.addEventListener('resize', function () {
        chart.resize()
    })       
```


```javascript
    import Grph from 'grph.js'

    var chart = new Grph({
        type: 'bar',
        canvas: document.getElementById('c'),
        data: [
            { name: 'Satisfied', count: 1043, color: '#A015FC' },
            { name: 'Neutral', count: 80, color: '#AC3AF8' },
            { name: 'Unsatisfied', count: 300, color: '#B65DF1' },
            { name: 'No comment', count: 100, color: '#C380EF' }
        ]
    });

    window.addEventListener('resize', function () {
        chart.resize()
    })        

``` 

![](https://github.com/stellanhaglund/grph.js/blob/master/images/bar.png?raw=true)