import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
})(Tabs);
  
const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 0,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(1),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

function Tabcom() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    <AntTab label="All" />
                    <AntTab label="Images" />
                    <AntTab label="News" />
                    <AntTab label="Videos" />
                    <AntTab label="More" />
                </AntTabs>
            </Grid>
            <Grid item xs={4}>
                <AntTabs aria-label="ant example">
                    <AntTab label="Settings" />
                    <AntTab label="Tools" />
                </AntTabs>
            </Grid>
        </Grid>
        </>
    )
}

export default Tabcom
