<?php

namespace timer\apiBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints\Date;

/**
 * Track
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Track implements \JsonSerializable
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="houres", type="integer")
     */
    private $houres;

    /**
     * @var integer
     *
     * @ORM\Column(name="minutes", type="integer")
     */
    private $minutes;

    /**
     * @var integer
     *
     * @ORM\Column(name="seconds", type="integer")
     */
    private $seconds;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date")
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=512)
     */
    private $description;



    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set houres
     *
     * @param integer $houres
     *
     * @return Track
     */
    public function setHoures($houres)
    {
        $this->houres = $houres;

        return $this;
    }

    /**
     * Get houres
     *
     * @return integer
     */
    public function getHoures()
    {
        return $this->houres;
    }

    /**
     * Set minutes
     *
     * @param integer $minutes
     *
     * @return Track
     */
    public function setMinutes($minutes)
    {
        $this->minutes = $minutes;

        return $this;
    }

    /**
     * Get minutes
     *
     * @return integer
     */
    public function getMinutes()
    {
        return $this->minutes;
    }

    /**
     * Set seconds
     *
     * @param integer $seconds
     *
     * @return Track
     */
    public function setSeconds($seconds)
    {
        $this->seconds = $seconds;

        return $this;
    }

    /**
     * Get seconds
     *
     * @return integer
     */
    public function getSeconds()
    {
        return $this->seconds;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Track
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Track
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    public static function fromJson($data){
        $t= new Track();
        $t->description=$data->{"description"};
        $t->houres=$data->{'time'}->{'hours'};
        $t->minutes=$data->{'time'}->{'minutes'};
        $t->seconds=$data->{'time'}->{'seconds'};
        $t->date= new \DateTime($data->{'date'});
        return $t;
    }


    /**
     * Specify data which should be serialized to JSON
     * @link http://php.net/manual/en/jsonserializable.jsonserialize.php
     * @return mixed data which can be serialized by <b>json_encode</b>,
     * which is a value of any type other than a resource.
     * @since 5.4.0
     */
    function jsonSerialize()
    {
        $track=array();
        $time=array();
        $track["date"]=($this->date->format('Y-m-d H:i:s'));
        $track["description"]=$this->description;
        $time["hours"]=$this->houres;
        $time["minutes"]=$this->minutes;
        $time["seconds"]=$this->seconds;
        $track["time"]=$time;
        $track["id"]=$this->id;
        return $track;
    }
}

