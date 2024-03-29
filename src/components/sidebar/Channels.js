import Modal from "../modal/Modal";
import PropTypes from "prop-types";
import Channel from "../channels/Channel";
import { useEffect, useRef } from "react";
import { styles } from "./channels.styles.module";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import LoadingChanel from "../channels/LoadingChannel";
import { connect } from "react-redux";
import { fetchChannels } from "../../redux/actions/channel";

const Channels = ({ fetchChannels, channels, loading, classes }) => {
  useEffect(() => {
    fetchChannelsRef.current();
  }, []);

  const fetchChannelsRef = useRef(() => {});
  fetchChannelsRef.current = () => {
    fetchChannels();
  };

  return (
    <div className={classes.channels}>
      <div className={classes.channels_title_action}>
        <Typography className={classes.channel_title} variant="body2">
          Channels
        </Typography>
        <Modal title="Create New Channel" />
      </div>
      <div className={classes.user_channel_container}>
        {!loading
          ? channels.length <= 0
            ? "Your don't have channel yet"
            : channels.map(channel => (
                <Channel
                  name={channel.name}
                  id={channel._id}
                  visibility={channel.visibility}
                  key={channel._id}
                />
              ))
          : [...new Array(7)].map((ele, index) => (
              <LoadingChanel key={index} />
            ))}
      </div>
    </div>
  );
};

Channels.propTypes = {
  loading: PropTypes.bool,
  channels: PropTypes.array,
  classes: PropTypes.object,
  fetchChannels: PropTypes.func
};

const mapStateToProps = state => ({
  channels: state.channel.channelList,
  loading: state.channel.loading
});

const mapDispatchToProps = {
  fetchChannels
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Channels));
